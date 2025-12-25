import React, { useState } from "react";
import api from "../../services/api";
import { useHistory } from "react-router-dom";

const AdminLogin = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      const res = await api.post("/admin/login", { email, password });
      localStorage.setItem("adminToken", res.data.token);
      history.push("/admin/dashboard");
    } catch {
      alert("Invalid credentials");
    }
  };

  return (
    <div>
      <h2>Admin Login</h2>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button onClick={login}>Login</button>
    </div>
  );
};

export default AdminLogin;
