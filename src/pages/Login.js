import React, { useState } from 'react';
import axios from '../api/axios';  // Assuming you have the axios instance set up
import validator from 'validator';  // For email validation

const Login = ({ setUser }) => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [passwordChangeError, setPasswordChangeError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const validatePassword = (password) => {
    // Validate password: At least 8 characters, includes letters and numbers
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validator.isEmail(formData.username)) {
      setError('Invalid email format');
      return;
    }
    if (!validatePassword(formData.password)) {
      setError('Password must be at least 8 characters long and include both letters and numbers');
      return;
    }

    try {
      const response = await axios.post('/auth/login', formData);
      localStorage.setItem('token', response.data.token); // Save token in localStorage
      setUser(true); // Notify the parent component (App.js) that user is logged in
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  const handlePasswordChangeSubmit = async (e) => {
    e.preventDefault();
    if (!validatePassword(newPassword)) {
      setPasswordChangeError('Password must be at least 8 characters long and include both letters and numbers');
      return;
    }

    try {
      // Call API to change password
      await axios.post('/auth/change-password', { password: newPassword });
      setShowChangePassword(false);  // Hide change password UI
    } catch (err) {
      setPasswordChangeError('Failed to change password');
    }
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-3xl font-bold mb-6">Login</h2>
      {error && <p className="text-red-600">{error}</p>}
      
      {/* Login Form */}
      {!showChangePassword ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-lg font-semibold">Email</label>
            <input
              type="email"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-lg font-semibold">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
            <p className="text-sm text-gray-500 mt-2">Password must be at least 8 characters long, and include letters and numbers.</p>
          </div>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Login
          </button>
          <button
            type="button"
            onClick={() => setShowChangePassword(true)}
            className="text-blue-600 mt-2"
          >
            Change Password
          </button>
        </form>
      ) : (
        // Change Password Form
        <form onSubmit={handlePasswordChangeSubmit} className="space-y-4">
          <div>
            <label htmlFor="new-password" className="block text-lg font-semibold">New Password</label>
            <input
              type="password"
              id="new-password"
              name="new-password"
              value={newPassword}
              onChange={handlePasswordChange}
              className="w-full p-2 border rounded"
              required
            />
            <p className="text-sm text-gray-500 mt-2">Password must be at least 8 characters long, and include letters and numbers.</p>
          </div>
          {passwordChangeError && <p className="text-red-600">{passwordChangeError}</p>}
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Change Password
          </button>
          <button
            type="button"
            onClick={() => setShowChangePassword(false)}
            className="text-blue-600 mt-2"
          >
            Cancel
          </button>
        </form>
      )}
    </div>
  );
};

export default Login;
