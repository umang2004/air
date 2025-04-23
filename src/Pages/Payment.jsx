import React, { useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ReactToPdf from 'react-to-pdf';

export default function Payment() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const receiptRef = useRef();

  if (!state) return <p className="p-10 text-red-500 text-lg">No booking info.</p>;

  const { flight, adults, children, total } = state;

  const handlePayment = () => {
    // Simulate successful payment
    navigate('/receipt', { state });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white mt-10 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4">Payment Page</h2>

      {/* Receipt Content */}
      <div ref={receiptRef} className="bg-gray-50 p-4 rounded-xl mb-4 shadow-sm">
        <p><strong>Flight:</strong> {flight.airline} ({flight.flightNumber})</p>
        <p><strong>From:</strong> {flight.from}</p>
        <p><strong>To:</strong> {flight.to}</p>
        <p><strong>Departure:</strong> {flight.departureTime}</p>
        <p><strong>Arrival:</strong> {flight.arrivalTime}</p>
        <p><strong>Passengers:</strong> {adults} Adult(s), {children} Child(ren)</p>
        <p className="text-lg mt-2"><strong>Total to Pay:</strong> ₹{total}</p>
      </div>

      {/* Payment Button */}
      <button
        onClick={handlePayment}
        className="mt-2 px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700"
      >
        Pay Now
      </button>

      {/* PDF Download */}
      <ReactToPdf targetRef={receiptRef} filename={`receipt-${flight.flightNumber}.pdf`}>
        {({ toPdf }) => (
          <button
            onClick={toPdf}
            className="ml-4 mt-2 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Download Receipt (PDF)
          </button>
        )}
      </ReactToPdf>
    </div>
  );
}

