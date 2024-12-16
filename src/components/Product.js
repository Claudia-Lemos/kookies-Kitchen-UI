// src/components/Product.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../redux/slices/cartSlice';

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
   
    dispatch(addItemToCart(product));
  };

  return (
    <div className="product-card p-4 border">
      <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
      <h3 className="font-bold">{product.name}</h3>
      <p className="text-lg">${product.price}</p>
      <button
        onClick={handleAddToCart}
        className="mt-2 bg-blue-500 text-white py-2 px-4 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
