import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white font">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
       
        </div>

        <nav className="flex space-x-6">
          <Link to="/" className="hover:text-yellow-400">Home</Link>
          <Link to="/about" className="hover:text-yellow-400">About Us</Link>
          <Link to="/contact" className="hover:text-yellow-400">Contact Us</Link>
          <Link to="/cart" className="hover:text-yellow-400">Cart</Link>
        </nav>

      
        <div>
          <Link to="/login" className="bg-yellow-400 text-gray-800 px-4 py-2 rounded hover:bg-yellow-500">
            Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
