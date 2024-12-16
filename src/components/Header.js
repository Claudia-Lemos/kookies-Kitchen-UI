import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white font">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
        <img src="https://in.images.search.yahoo.com/search/images;_ylt=Awr1QVVAPV9nJQIAkbu7HAx.;_ylu=Y29sbwNzZzMEcG9zAzEEdnRpZAMEc2VjA3Nj?type=E211IN826G0&p=Kookies+Kitchen+logo&fr=mcafee&th=495&tw=474&imgurl=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D100057262247968&rurl=https%3A%2F%2Fwww.facebook.com%2Fkookieskitchen%2F&size=289KB&name=Kookies+Kitchen+%7C+Accra&oid=1&h=2048&w=1961&turl=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.LFlaChCXlYuFc2QTdP9VTgHaHv%26pid%3DApi&tt=Kookies+Kitchen+%7C+Accra&sigr=LBZmT3Skc.G0&sigit=VvtX9aawd04Z&sigi=aNQDc7RQ4MRz&sign=uO7PHXb9iYuU&sigt=uO7PHXb9iYuU" alt="Kookie\'s logo" className="logo" />
  
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
