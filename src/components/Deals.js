import React, { useEffect, useState } from 'react';
import { api } from '../api';
import './Deals.css';

const Deals = () => {
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    const fetchDeals = async () => {
      try {
        const response = await api.get('/menu/deals');
        setDeals(response.data);
      } catch (error) {
        console.error('Error fetching deals:', error);
      }
    };
    fetchDeals();
  }, []);

  return (
    <div className="deals">
      <h2>Deals for You</h2>
      <ul>
        {deals.map((deal, index) => (
          <li key={index}>{deal}</li>
        ))}
      </ul>
    </div>
  );
};

export default Deals;
