import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [menuItems, setMenuItems] = useState([]); 
  const [error, setError] = useState(null);     
  const [loading, setLoading] = useState(true);  

 
  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await axios.get('/api/data.json'); 
        console.log('Menu API Response:', response.data); 
        setMenuItems(response.data); 
      } catch (err) {
        console.error('Error fetching menu data:', err);
        setError(err.message || 'Failed to fetch menu data');
      }
    };
    

    fetchMenu();
  }, []);

  // Render loading or error states
  if (loading) return <div className='bg-gradient-to-r from-orange-300 to-yellow-100 min-h-screen'>Loading...</div>;
  if (error) return <div className='bg-gradient-to-r from-orange-300 to-yellow-100 min-h-screen'>Error: {error}</div>;

  // Render the menu
  return (
    <div>
      <h1>Menu</h1>
      {menuItems.length > 0 ? (
        <ul>
          {menuItems.map((item) => (
            <li key={item._id}>{item.name} - ₹{item.price}</li> 
          ))}
        </ul>
      ) : (
        <p>No menu items available</p>
      )}
    </div>
  );
};

export default Home;
