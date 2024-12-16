import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [menuItems, setMenuItems] = useState([]); 
  const [error, setError] = useState(null);     
  const [loading, setLoading] = useState(true);  

 
  useEffect(() => {
    const fetchMenu = async () => {
      try {
        setLoading(true);
        setError(null); 
        const response = await axios.get('/api/menu'); //check
        setMenuItems(response.data);
      } catch (err) {
        console.error('Error fetching menu data:', err);
        setError(err.message || 'Failed to fetch menu data');
      } finally {
        setLoading(false); 
      }
    };

    fetchMenu();
  }, []);

  // Render loading or error states
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  // Render the menu
  return (
    <div>
      <h1>Menu</h1>
      {menuItems.length > 0 ? (
        <ul>
          {menuItems.map((item) => (
            <li key={item._id}>{item.name} - ${item.price}</li> 
          ))}
        </ul>
      ) : (
        <p>No menu items available</p>
      )}
    </div>
  );
};

export default Home;
