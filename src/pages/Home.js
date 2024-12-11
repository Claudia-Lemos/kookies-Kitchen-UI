import React, { useEffect, useState } from 'react';
import axios from '../api/axios';

const Home = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await axios.get('/auth/menu');
        setMenuItems(response.data);
      } catch (err) {
        setError('Failed to load menu');
      } finally {
        setLoading(false);
      }
    };

    fetchMenuItems();
  }, []);

  if (loading) {
    return <div className="spinner">Loading...</div>; // Add a spinner or loading indicator
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold">Menu</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {menuItems.map((item) => (
          <div key={item.id} className="p-4 bg-white border rounded shadow-lg">
            <img src={item.imageUrl} alt={item.name} className="w-full h-32 object-cover rounded-md" />
            <h3 className="mt-2 text-xl font-semibold">{item.name}</h3>
            <p className="text-gray-700">{item.description}</p>
            <div className="mt-4 flex justify-between items-center">
              <span className="font-bold text-xl">₹{item.price}</span>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
