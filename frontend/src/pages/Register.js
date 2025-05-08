import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [registerFormData, setRegisterFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setRegisterFormData({
      ...registerFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://task-manager-app-aslam-api.onrender.com/api/auth/register",
        registerFormData
      );
      navigate(`/login`);
    } catch (err) {
      alert("Registeration failed");
    }
  };

  return (
    <>
      <form className="register-form" onSubmit={handleSubmit}>
        <h2 className="register-title">Register</h2>
        <input
          className="register-input"
          name="email"
          value={registerFormData.email}
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          className="register-input"
          type="password"
          name="password"
          value={registerFormData.password}
          placeholder="Password"
          onChange={handleChange}
        />
        <button className="register-button" type="submit">
          Register
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
        <p>Already a User ? Go to </p>
        <button onClick={() => navigate("/login")}>Login page</button>
      </div>
    </>
  );
};

export default Register;
