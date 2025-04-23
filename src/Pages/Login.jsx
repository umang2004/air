import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = e => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const handleSubmit = e => {
    e.preventDefault();
  
    if (!credentials.email || !credentials.password) {
      setError('Both fields are required.');
      return;
    }
  
    // Simulating login logic with role-based redirection
    if (credentials.email === 'admin@gmail.com' && credentials.password === 'admin123') {
      console.log('Logging in as admin');
      localStorage.setItem('role', 'admin');
      localStorage.setItem('loggedInUser', credentials.email); // ✅ Set logged-in flag
      navigate('/admin-dashboard');
    } else if (credentials.email === 'user@gmail.com' && credentials.password === 'user123') {
      console.log('Logging in as user');
      localStorage.setItem('role', 'user');
      localStorage.setItem('loggedInUser', credentials.email); // ✅ Set logged-in flag
      navigate('/user-dashboard');
    } else {
      setError('Invalid email or password.');
    }
  };
  

  return (
    <div className="flex justify-center items-center h-screen bg-blue-50">
      <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login to Your Account</h2>
        
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={credentials.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to="/register" className="text-blue-600 hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}
