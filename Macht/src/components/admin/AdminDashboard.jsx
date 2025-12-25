import React, { useEffect, useState } from "react";
import api from "../../services/api";

const AdminDashboard = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    api.get("/payments").then(res => setPayments(res.data));
  }, []);

  const verify = async (id) => {
    await api.put(`/payments/${id}/verify`);
    setPayments(payments.map(p =>
      p._id === id ? { ...p, status: "Verified" } : p
    ));
  };

  return (
    <div>
      <h2>Payment Verification</h2>

      <table border="1">
        <thead>
          <tr>
            <th>Plan</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {payments.map(p => (
            <tr key={p._id}>
              <td>{p.planName}</td>
              <td>₹{p.amount}</td>
              <td>{p.status}</td>
              <td>
                {p.status === "Pending" && (
                  <button onClick={() => verify(p._id)}>Verify</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
