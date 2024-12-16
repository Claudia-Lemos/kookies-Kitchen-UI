// In your Login.js (Frontend) component
import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // State to capture error messages

  const handleLogin = async (e) => {
    e.preventDefault();

    // Send a POST request to the backend API to login
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Handle successful login (store token, redirect, etc.)
        console.log('Login successful:', data);
        localStorage.setItem('token', data.token); // Save the JWT token in localStorage
        // Redirect to dashboard or home page
        window.location.href = '/dashboard';  // You can adjust the redirect as needed
      } else {
        // Handle error response
        setError(data.message || 'Login failed. Please try again.');
      }
    } catch (err) {
      // Catch any errors during fetch
      console.error('Error during login:', err);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}  {/* Display error if any */}
    </div>
  );
};

export default Login;
