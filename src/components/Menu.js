import React, { useEffect, useState, useContext } from 'react';
import { api } from '../api/axios';
import { CartContext } from '../context/CartContext';

const Menu = () => {
  const [menu, setMenu] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await api.get('/menu/menu');
        setMenu(response.data);
      } catch (error) {
        console.error('Error fetching menu:', error);
      }
    };
    fetchMenu();
  }, []);

  return (
    <div>
      <h1>Menu</h1>
      <ul>
        {menu.map(item => (
          <li key={item.id}>
            <img src={item.imageId} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
