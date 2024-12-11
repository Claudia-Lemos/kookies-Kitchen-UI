import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, clearCart } from '../redux/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleRemove = (item) => {
    dispatch(removeItem(item));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-3xl font-bold mb-6">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div>
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between items-center p-4 bg-white border rounded shadow">
                <div>
                  <img src={item.imageUrl} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
                <div>
                  <p className="font-bold">₹{item.price}</p>
                  <button
                    className="text-red-600 hover:text-red-800"
                    onClick={() => handleRemove(item)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex justify-between items-center">
            <button
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              onClick={handleClearCart}
            >
              Clear Cart
            </button>
            <div className="font-bold text-xl">Total: ₹{totalPrice}</div>
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
