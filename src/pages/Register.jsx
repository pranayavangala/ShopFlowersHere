import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/client";
import "./Register.scss";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      await API.post("/register", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      navigate("/");
    } catch (error) {
      console.log(error);

      if (error.response) {
        alert(error.response.data.detail || "Registration Failed");
      } else {
        alert("Unable to connect to server");
      }
    }
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <h1>Create Account 🌸</h1>

        <p className="register-subtitle">
          Join Nirnaya Florals and start shopping beautiful flowers
        </p>

        <form onSubmit={handleRegister}>
          <div className="form-group">
            <label>Full Name</label>

            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Confirm Password</label>

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="register-btn">
            Create Account
          </button>
        </form>

        <div className="register-footer">
          <p>
            Already have an account?
            <Link to="/login">
              <span> Login</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
