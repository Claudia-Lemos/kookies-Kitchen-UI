import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/About';
import Cart from './pages/Cart'; 
import ContactUs from './pages/Contact';
import AdminDashboard from './pages/AdminDashboard';
import Product from "./components/Product"; 
import Login from './components/Login';
import ChangePassword from './components/ChangePassword';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <header className="bg-orange-400 p-4 rounded-lg">
        <nav className="h-14 flex justify-between items-center">
        <h1 className="text-white text-2xl">
  <img src="../public/img/logo.jpg" alt="Kookie's Kitchen logo" className="logo" />
</h1>
          <ul className="flex space-x-4">
            <li><a href="/" className="text-white ">Home</a></li>
            <li><a href="/about" className="text-white">About Us</a></li>
            <li><a href="/cart" className="text-white">Cart</a></li>
            <li><a href="/contact" className="text-white">Contact Us</a></li>
            <li><a href="/login" className="text-white">Login</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/change-password" component={ChangePassword} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
