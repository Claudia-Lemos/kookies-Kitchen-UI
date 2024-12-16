import React from "react";

const AdminDashboard = ({ orders }) => {
  const handleApprove = (orderId) => {
    
  };

  const handleDisapprove = (orderId) => {
 
  };

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-2xl font-bold">Admin Dashboard</h2>
      <table className="table-auto w-full mt-4">
        <thead>
          <tr>
            <th className="px-4 py-2">Order ID</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Time</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td className="border px-4 py-2">{order.id}</td>
              <td className="border px-4 py-2">{order.date}</td>
              <td className="border px-4 py-2">{order.time}</td>
              <td className="border px-4 py-2">{order.status}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => handleApprove(order.id)}
                  className="bg-green-500 text-white px-2 py-1 rounded"
                >
                  Approve
                </button>
                <button
                  onClick={() => handleDisapprove(order.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded ml-2"
                >
                  Disapprove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
