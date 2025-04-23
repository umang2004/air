import React, { useState } from 'react';

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const [userProfile, setUserProfile] = useState({
    username: 'John Doe',
    email: 'johndoe@example.com',
    phone: '+1 234 567 8901',
    address: '1234 Main St, Los Angeles, CA',
    dateOfBirth: '1990-01-01',
    loyaltyPoints: 1500,
    frequentFlyerNumber: 'FF1234567890',
    preferredSeat: 'Window',
    preferredMeal: 'Vegan',
    bookingHistory: [
      {
        flightNumber: 'AA101',
        from: 'Los Angeles',
        to: 'New York',
        date: '2025-01-10',
        status: 'Completed',
      },
      {
        flightNumber: 'BA202',
        from: 'Chicago',
        to: 'London',
        date: '2025-02-20',
        status: 'Completed',
      },
    ],
    notifications: [
      'Flight AA101 has been successfully completed.',
      'Your loyalty points have been updated.',
    ],
    passwordLastChanged: '2024-12-01',
    twoFactorEnabled: true,
  });


  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-extrabold text-center mb-8 text-blue-700">
        User Dashboard
      </h1>

      {/* Tab Navigation */}
      <div className="flex justify-center space-x-4 mb-8 flex-wrap">
        {['profile', 'preferences', 'history', 'security', 'notifications'].map((tab) => (
          <button
            key={tab}
            className={`px-6 py-2 rounded-full font-medium shadow-md transition duration-300 ${
              activeTab === tab
                ? 'bg-blue-600 text-white'
                : 'bg-white border border-blue-600 text-blue-600 hover:bg-blue-100'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Profile Tab */}
      {activeTab === 'profile' && (
        <div className="bg-white p-6 rounded-xl shadow-md max-w-3xl mx-auto mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Personal Information</h2>
          <p><strong>Name:</strong> {userProfile.username}</p>
          <p><strong>Email:</strong> {userProfile.email}</p>
          <p><strong>Phone:</strong> {userProfile.phone}</p>
          <p><strong>Date of Birth:</strong> {userProfile.dateOfBirth}</p>
          <p><strong>Address:</strong> {userProfile.address}</p>
          <button
          
            className="bg-blue-600 text-white py-2 px-4 rounded mt-4 hover:bg-blue-700 transition"
          >
            Update Profile
          </button>
        </div>
      )}

      {/* Preferences Tab */}
      {activeTab === 'preferences' && (
        <div className="bg-white p-6 rounded-xl shadow-md max-w-3xl mx-auto mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Travel Preferences</h2>
          <p><strong>Loyalty Points:</strong> {userProfile.loyaltyPoints}</p>
          <p><strong>Frequent Flyer Number:</strong> {userProfile.frequentFlyerNumber}</p>
          <p><strong>Preferred Seat:</strong> {userProfile.preferredSeat}</p>
          <p><strong>Preferred Meal:</strong> {userProfile.preferredMeal}</p>
        </div>
      )}

      {/* Booking History Tab */}
      {activeTab === 'history' && (
        <div className="bg-white p-6 rounded-xl shadow-md max-w-3xl mx-auto mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Booking History</h2>
          {userProfile.bookingHistory.length === 0 ? (
            <p>No past bookings found.</p>
          ) : (
            userProfile.bookingHistory.map((booking, index) => (
              <div key={index} className="border-b pb-2 mb-2">
                <p><strong>Flight:</strong> {booking.flightNumber}</p>
                <p>{booking.from} ➡ {booking.to}</p>
                <p><strong>Date:</strong> {booking.date}</p>
                <p><strong>Status:</strong> {booking.status}</p>
              </div>
            ))
          )}
        </div>
      )}

      {/* Security Tab */}
      {activeTab === 'security' && (
        <div className="bg-white p-6 rounded-xl shadow-md max-w-3xl mx-auto mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Security Settings</h2>
          <p><strong>Password Last Changed:</strong> {userProfile.passwordLastChanged}</p>
          <p><strong>Two-Factor Authentication:</strong> {userProfile.twoFactorEnabled ? 'Enabled' : 'Disabled'}</p>
          <button className="mt-3 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition">
            Change Password
          </button>
        </div>
      )}

      {/* Notifications Tab */}
      {activeTab === 'notifications' && (
        <div className="bg-white p-6 rounded-xl shadow-md max-w-3xl mx-auto mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Notifications</h2>
          {userProfile.notifications.length === 0 ? (
            <p>No new notifications.</p>
          ) : (
            <ul className="list-disc list-inside space-y-2">
              {userProfile.notifications.map((note, index) => (
                <li key={index}>{note}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default UserDashboard;
