// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// export default function Register() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     phone: '',
//     address: '',
//     dateOfBirth: '',
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Registered with:', formData);
//     // TODO: Handle backend logic here
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-blue-100">
//       <div className="w-full max-w-xl p-8 bg-white rounded-xl shadow-md">
//         <h2 className="text-2xl font-bold mb-6 text-center">Create Your Account</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">

//           <input
//             type="text"
//             name="name"
//             placeholder="Full Name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email Address"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <input
//             type="tel"
//             name="phone"
//             placeholder="Phone Number"
//             value={formData.phone}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <input
//             type="text"
//             name="address"
//             placeholder="Address"
//             value={formData.address}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <input
//             type="date"
//             name="dateOfBirth"
//             value={formData.dateOfBirth}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />

//           <button
//             type="submit"
//             className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
//           >
//             Register
//           </button>
//         </form>

//         <p className="mt-4 text-center text-sm text-gray-600">
//           Already have an account?{' '}
//           <Link to="/login" className="text-blue-600 hover:underline">
//             Login here
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    address: '',
    dateOfBirth: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' }); // Clear error on change
  };

  const validateForm = () => {
    const { name, email, password, phone, address, dateOfBirth } = formData;
    const newErrors = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?#&])[A-Za-z\d@$!%?#&]{8,}$/;
    const phoneRegex = /^\d{10}$/;

    if (!name) newErrors.name = 'Full Name is required.';
    if (!email || !emailRegex.test(email)) newErrors.email = 'Valid email is required.';
    if (!password || !passwordRegex.test(password))
      newErrors.password =
        'Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.';
    if (!phone || !phoneRegex.test(phone)) newErrors.phone = 'Phone must be exactly 10 digits.';
    if (!address) newErrors.address = 'Address is required.';
    if (!dateOfBirth) newErrors.dateOfBirth = 'Date of Birth is required.';

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Registered with:', formData);
      alert('Registered Successfully!');
      setFormData({
        name: '',
        email: '',
        password: '',
        phone: '',
        address: '',
        dateOfBirth: '',
      });
      setErrors({});
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-100">
      <div className="w-full max-w-xl p-8 bg-white rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Create Your Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Name */}
          <div>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Password */}
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>

          {/* Phone */}
          <div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>

          {/* Address */}
          <div>
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
          </div>

          {/* Date of Birth */}
          <div>
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.dateOfBirth && <p className="text-red-500 text-sm mt-1">{errors.dateOfBirth}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Register
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}