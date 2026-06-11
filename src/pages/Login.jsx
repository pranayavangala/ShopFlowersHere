import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/client";
import "./Login.scss";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const [successMessage, setSuccessMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await API.post("/login", {
        email: formData.email,
        password: formData.password,
      });

      // Save JWT token if backend returns one
      if (response.data.access_token) {
        localStorage.setItem("token", response.data.access_token);
      }

      localStorage.setItem("isLoggedIn", "true");

      setSuccessMessage(
        "🌸 Login successful! Welcome back to Nirnaya Florals.",
      );
      setTimeout(() => {
        navigate("/");
      }, 15);

      {
        successMessage && <p className="success-message">{successMessage}</p>;
      }
    } catch (error) {
      console.log(error);

      if (error.response) {
        alert(error.response.data.detail || "Invalid credentials");
      } else {
        alert("Unable to connect to server");
      }
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1>Welcome Back 🌸</h1>

        <p className="login-subtitle">
          Login to continue shopping beautiful flowers
        </p>

        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email</label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <div className="login-footer">
          <p>
            Don't have an account?
            <Link to="/register">
              <span> Register</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
