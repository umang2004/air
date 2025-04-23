import { useLocation } from 'react-router-dom';

export default function Receipt() {
  const { state } = useLocation();

  if (!state) return <p>No payment info.</p>;

  const { flight, adults, children, total } = state;

  const downloadReceipt = () => {
    const receiptText = `
      Airline Receipt

      Flight: ${flight.airline} (${flight.flightNumber})
      Route: ${flight.from} ➝ ${flight.to}
      Departure: ${flight.departureTime}

      Passengers: ${adults} Adult(s), ${children} Child(ren)
      Total Paid: ₹${total}

      Thank you for booking with AirlineX!
    `;

    const blob = new Blob([receiptText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'FlightReceipt.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white mt-10 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4">Payment Successful</h2>
      <p><strong>Flight:</strong> {flight.airline} ({flight.flightNumber})</p>
      <p><strong>Passengers:</strong> {adults} Adult(s), {children} Child(ren)</p>
      <p className="text-lg"><strong>Total Paid:</strong> ₹{total}</p>
      <button
        onClick={downloadReceipt}
        className="mt-4 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Download Ticket
      </button>
    </div>
  );
}
