import React, { useState } from 'react';
import flightsData from '../Data/flights.json';
import cities from '../Data/cities.json';
import { useNavigate } from 'react-router-dom';

const FlightCard = ({ flight, onBook }) => (
  <div className="bg-white rounded-xl shadow p-4 mb-4 flex justify-between items-center">
    <div>
      <h3 className="text-lg font-semibold">{flight.airline} ({flight.flightNumber})</h3>
      <p className="text-sm text-gray-600">{flight.from} ➝ {flight.to}</p>
      <p className="text-sm text-gray-500">{flight.departureTime} - {flight.arrivalTime} • {flight.duration}</p>
    </div>
    <div className="text-right">
      <p className="text-blue-600 text-lg font-semibold">₹{flight.price}</p>
      <button
        onClick={() => onBook(flight)}
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Book
      </button>
    </div>
  </div>
);

export default function Booking() {
  const [tripType, setTripType] = useState('oneway');
  const [from, setFrom] = useState('Delhi, DEL');
  const [to, setTo] = useState('');
  const [departureDate, setDepartureDate] = useState('2025-04-05');
  const [returnDate, setReturnDate] = useState('');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [travelReason, setTravelReason] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [selectedFlight, setSelectedFlight] = useState(null);

  const navigate = useNavigate(); // ✅ correct usage inside component
  const handleBookFlight = (flight) => {
    const user = JSON.parse(localStorage.getItem('loggedInUser'));
  
    if (!user) {
      // Not logged in: redirect to login with redirect back to booking
      navigate('/login', {
        state: {
          redirectTo: '/booking',
          flight,
          adults,
          children,
        },
      });
    } else {
      // Logged in: proceed to payment
      const bookingData = {
        flight,
        adults,
        children,
        total: flight.price * (adults + children),
      };
      navigate('/payment', { state: bookingData });
    }
  };
  

  const handleSearch = () => {
    setShowResults(true);
    setSelectedFlight(null);
  };

  const filteredFlights = flightsData.filter(
    (flight) =>
      flight.from.toLowerCase().includes(from.toLowerCase()) &&
      flight.to.toLowerCase().includes(to.toLowerCase())
  );

  const totalPassengers = adults + children;
  const totalPrice = selectedFlight ? selectedFlight.price * totalPassengers : 0;

  return (
    <>
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-2xl shadow-md m-10">
      <h1 className="text-3xl font-bold mb-6">Book domestic and international flights</h1>

      <div className="mb-4">
        <div className="inline-flex gap-6 text-lg">
          {['oneway', 'round'].map((type) => (
            <label key={type} className="inline-flex items-center gap-2">
              <input
                type="radio"
                name="tripType"
                value={type}
                checked={tripType === type}
                onChange={() => setTripType(type)}
              />
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </label>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <input
          list="city-options"
          className="border p-3 rounded text-sm"
          placeholder="From"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        />
        <input
          list="city-options"
          className="border p-3 rounded text-sm"
          placeholder="To"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        />
        <datalist id="city-options">
          {cities.map((city, i) => (
            <option key={i} value={city.label} />
          ))}
        </datalist>

        <input
          type="date"
          className="border p-3 rounded text-sm"
          value={departureDate}
          onChange={(e) => setDepartureDate(e.target.value)}
        />

        {tripType === 'round' && (
          <input
            type="date"
            className="border p-3 rounded text-sm"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
          />
        )}

        <select
          className="border p-3 rounded text-sm"
          value={travelReason}
          onChange={(e) => setTravelReason(e.target.value)}
        >
          <option value="">I am travelling for</option>
          <option value="Business">Business</option>
          <option value="Leisure">Leisure</option>
        </select>

        <select
          className="border p-3 rounded text-sm"
          value={adults}
          onChange={(e) => setAdults(Number(e.target.value))}
        >
          
          {[...Array(6)].map((_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1} Adult
            </option>
          ))}
        </select>

        <select
          className="border p-3 rounded text-sm"
          value={children}
          onChange={(e) => setChildren(Number(e.target.value))}
        >
          {[...Array(6)].map((_, i) => (
            <option key={i} value={i}>
              {i} Child
            </option>
          ))}
        </select>
      </div>

      <div className="mt-6">
        <button
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      {showResults && (
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Available Flights</h2>
          {filteredFlights.length > 0 ? (
            filteredFlights.map((flight) => (
              <FlightCard key={flight.id} flight={flight} onBook={handleBookFlight} />
            ))
          ) : (
            <p className="text-gray-600">No flights found for your search.</p>
          )}
        </div>
      )}

      {selectedFlight && (
        <div className="mt-10 border-t pt-6">
          <h2 className="text-2xl font-bold mb-4">Booking Summary</h2>
          <div className="bg-gray-50 p-4 rounded-xl shadow">
            <p><strong>Flight:</strong> {selectedFlight.airline} ({selectedFlight.flightNumber})</p>
            <p><strong>Route:</strong> {selectedFlight.from} ➝ {selectedFlight.to}</p>
            <p><strong>Departure:</strong> {selectedFlight.departureTime}</p>
            <p><strong>Passengers:</strong> {adults} Adult(s), {children} Child(ren)</p>
            <p className="text-lg mt-2"><strong>Total Price:</strong> ₹{totalPrice}</p>
          </div>
        </div>
      )}
    </div>
    </>
  );
}
