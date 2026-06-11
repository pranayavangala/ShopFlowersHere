import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Navbar.scss";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("token");

    setIsLoggedIn(false);

    navigate("/");
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        🌸 Nirnaya Florals
      </Link>

      <div className="nav-center">
        <Link to="/flowers">Flowers Collection</Link>
        <Link to="/about">About</Link>
      </div>

      <div className="nav-right">
        <Link to="/cart">Cart 🛒</Link>

        {!isLoggedIn ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        ) : (
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
