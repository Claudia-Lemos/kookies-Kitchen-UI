import React, { useEffect, useState } from 'react';
import { api } from '../api/axios'; 
import { useNavigate } from 'react-router-dom';

const Order = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
    calculateTotal(savedCart);
  }, []);


  const calculateTotal = (cartItems) => {
    let total = 0;
    cartItems.forEach(item => {
      total += item.price * item.quantity;
    });
    setTotalAmount(total);
  };

  
  const updateQuantity = (itemId, quantity) => {
    const updatedCart = cart.map(item => {
      if (item.id === itemId) {
        item.quantity = quantity;
      }
      return item;
    });
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); 
    calculateTotal(updatedCart);
  };

 
  const removeItem = (itemId) => {
    const updatedCart = cart.filter(item => item.id !== itemId);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); 
    calculateTotal(updatedCart);
  };

  const handleSubmitOrder = async () => {
    try {
      const userId = "user";//check 
      const orderData = {
        userId,
        items: cart.map(item => ({
          menuItemId: item.id,
          quantity: item.quantity,
        })),
        totalAmount,
      };

      
      const response = await api.post('/order/order', orderData);
      alert('Order placed successfully!');
      setCart([]); 
      localStorage.removeItem('cart'); 
      navigate('/'); 
    } catch (error) {
      console.error('Error submitting the order:', error);
      alert('There was an error placing your order.');
    }
  };

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} style={{ marginBottom: '10px' }}>
              <h4>{item.name}</h4>
              <p>{item.description}</p>
              <p>Price: ${item.price}</p>
              <div>
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>
                  -
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                  +
                </button>
              </div>
              <button onClick={() => removeItem(item.id)} style={{ color: 'red' }}>
                Remove
              </button>
            </div>
          ))}
          <div style={{ marginTop: '20px' }}>
            <h3>Total: ${totalAmount}</h3>
            <button onClick={handleSubmitOrder} style={{ padding: '10px 20px', backgroundColor: 'green', color: 'white' }}>
              Submit Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Order;
