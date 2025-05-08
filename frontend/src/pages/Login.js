import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginFormData({
      ...loginFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://task-manager-app-aslam-api.onrender.com/api/auth/login",
        loginFormData
      );
      localStorage.setItem("token", response.data.token);
      navigate(`/`);
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <>
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-title">Login</h2>
        <input
          className="login-input"
          name="email"
          value={loginFormData.email}
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          className="login-input"
          type="password"
          name="password"
          value={loginFormData.password}
          placeholder="Password"
          onChange={handleChange}
        />
        <button className="login-button" type="submit">
          Login
        </button>
      </form>
      <div
        style={{
          margin: "0% 20%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>New User ? Go to </p>
        <button onClick={() => navigate("/register")}>
          Registeration page
        </button>
      </div>
    </>
  );
};

export default Login;
