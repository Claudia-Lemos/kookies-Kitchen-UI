const Cart = ({ items }) => {
  const totalCost = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-2xl font-bold">Your Cart</h2>
      <ul className="mt-4">
        {items.map((item) => (
          <li key={item.id} className="flex justify-between">
            <span>{item.name}</span>
            <span>${item.price * item.quantity}</span>
          </li>
        ))}
      </ul>
      <div className="mt-4 text-right">
        <strong>Total: ${totalCost}</strong>
      </div>
      <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded">Checkout</button>
    </div>
  );
};

export default Cart;
