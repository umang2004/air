import React, { useState, useEffect } from 'react';
import flightsData from '../Data/flights.json';
import usersData from '../Data/users';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('users');
  const [flights, setFlights] = useState([]);
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [editingFlight, setEditingFlight] = useState(null);
  const [updatedFlight, setUpdatedFlight] = useState(null);

  useEffect(() => {
    setFlights(flightsData);
    setUsers(usersData);
  }, []);

  const filteredFlights = flights.filter((flight) =>
    `${flight.airline} ${flight.from} ${flight.to}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  const deleteFlight = (id) => {
    setFlights(flights.filter((flight) => flight.id !== id));
  };

  const handleEdit = (flight) => {
    setEditingFlight(flight);
    setUpdatedFlight(flight);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
    console.log('User deleted:', id);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedFlight({
      ...updatedFlight,
      [name]: value,
    });
  };

  const handleSave = () => {
    setFlights(flights.map((flight) =>
      flight.id === updatedFlight.id ? updatedFlight : flight
    ));
    setEditingFlight(null);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-extrabold text-center mb-8 text-blue-700">
        Admin Dashboard
      </h1>

      <div className="flex justify-center space-x-4 mb-8">
        <button
          className={`px-6 py-2 rounded-full font-medium shadow-md transition duration-300 ${
            activeTab === 'users'
              ? 'bg-blue-600 text-white'
              : 'bg-white border border-blue-600 text-blue-600 hover:bg-blue-100'
          }`}
          onClick={() => setActiveTab('users')}
        >
          View Users
        </button>
        <button
          className={`px-6 py-2 rounded-full font-medium shadow-md transition duration-300 ${
            activeTab === 'flights'
              ? 'bg-blue-600 text-white'
              : 'bg-white border border-blue-600 text-blue-600 hover:bg-blue-100'
          }`}
          onClick={() => setActiveTab('flights')}
        >
          View Flights
        </button>
      </div>

      {/* Users Table */}{activeTab === 'users' && (
  <div className="bg-white p-6 rounded-xl shadow-md">
  <h2 className="text-xl font-semibold mb-4 text-gray-700">
    Registered Users
  </h2>
  <div className="overflow-x-auto">
    <table className="min-w-full border border-gray-200 text-sm">
      <thead className="bg-gray-100 text-gray-600">
        <tr>
          <th className="p-3 text-left">ID</th>
          <th className="p-3 text-left">Username</th>
          <th className="p-3 text-left">Role</th>
          <th className="p-3 text-left">Actions</th> {/* Added Actions column */}
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id} className="hover:bg-gray-50 border-t">
            <td className="p-3">{user.id}</td>
            <td className="p-3">{user.username}</td>
            <td className="p-3 capitalize">{user.role}</td>
            <td className="p-3">
              <button
                onClick={() => deleteUser(user.id)}
                className="px-4 py-1 text-sm text-white bg-red-500 rounded-md hover:bg-red-600"
              >
                Delete
              </button>
            </td> {/* Added Delete button */}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
)}


      {/* Flights Table */}
      {activeTab === 'flights' && (
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex justify-between">
          <h2 className="text-xl font-semibold mb-6 text-gray-700">Flight Listings</h2>

          <div className="flex justify-between items-center mb-4">
            <div className="flex-grow">
              <input
                type="text"
                placeholder="Search by airline, from, to..."
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 w-full sm:w-80"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 text-sm">
              <thead className="bg-gray-100 text-gray-600">
                <tr>
                  <th className="p-3 text-left">Airline</th>
                  <th className="p-3 text-left">From</th>
                  <th className="p-3 text-left">To</th>
                  <th className="p-3 text-left">Date</th>
                  <th className="p-3 text-left">Departure</th>
                  <th className="p-3 text-left">Arrival</th>
                  <th className="p-3 text-left">Duration</th>
                  <th className="p-3 text-left">Price</th>
                  <th className="p-3 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredFlights.map((flight) => (
                  <tr key={flight.id} className="hover:bg-gray-50 border-t">
                    <td className="p-3">{flight.airline}</td>
                    <td className="p-3">{flight.from}</td>
                    <td className="p-3">{flight.to}</td>
                    <td className="p-3">{flight.date || '—'}</td>
                    <td className="p-3">{flight.departureTime}</td>
                    <td className="p-3">{flight.arrivalTime}</td>
                    <td className="p-3">{flight.duration}</td>
                    <td className="p-3">₹{flight.price}</td>
                    <td className="p-3">
                      <button
                        onClick={() => handleEdit(flight)}
                        className="px-4 py-1 text-sm text-white bg-blue-500 rounded-md hover:bg-blue-600"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteFlight(flight.id)}
                        className="ml-2 px-4 py-1 text-sm text-white bg-red-500 rounded-md hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Edit Flight Modal */}
      {editingFlight && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-xl shadow-md max-w-lg w-full flex flex-col space-y-4 max-h-[80vh] overflow-y-auto">
            <h3 className="text-xl font-semibold mb-4 text-gray-700 text-center">
              Edit Flight Details
            </h3>
            <div className="flex flex-col space-y-2">
              {['airline', 'from', 'to', 'duration'].map((field) => (
                <div key={field}>
                  <label className="block text-sm font-medium capitalize">{field}</label>
                  <input
                    type="text"
                    name={field}
                    value={updatedFlight[field]}
                    onChange={handleChange}
                    className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-300"
                  />
                </div>
              ))}

              {/* Add specific input types for other fields */}
              {['date', 'departureTime', 'arrivalTime', 'price'].map((field) => (
                <div key={field}>
                  <label className="block text-sm font-medium capitalize">{field}</label>
                  <input
                    type={field === 'date' ? 'date' : field === 'price' ? 'number' : 'time'}
                    name={field}
                    value={updatedFlight[field]}
                    onChange={handleChange}
                    className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-300"
                  />
                </div>
              ))}
            </div>

            <div className="flex justify-end space-x-4 mt-4">
              <button
                onClick={() => setEditingFlight(null)}
                className="px-4 py-2 text-sm text-white bg-gray-500 rounded-md hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 text-sm text-white bg-blue-500 rounded-md hover:bg-blue-600"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
