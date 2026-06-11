import "./Checkout.scss";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCart(storedCart);
  }, []);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="checkout-page">
      <div className="checkout-container">
        <h1>Checkout 🌸</h1>

        <div className="order-summary">
          <h2>Order Summary</h2>

          {cart.map((item) => (
            <div className="summary-card" key={item.id}>
              <div className="summary-image">
                <img src={item.image} alt={item.name} />
              </div>

              <div className="summary-info">
                <h3>{item.name}</h3>

                <p>Quantity : {item.quantity}</p>

                <p>${item.price}</p>
              </div>

              <div className="summary-price">
                ${(item.price * item.quantity).toFixed(2)}
              </div>
            </div>
          ))}

          <div className="total">Total : ${total.toFixed(2)}</div>
        </div>

        <div className="recipient-form">
          <h2>Recipient Information</h2>

          <div className="row">
            <div className="form-group">
              <label>First Name *</label>

              <input type="text" />
            </div>

            <div className="form-group">
              <label>Last Name *</label>

              <input type="text" />
            </div>
          </div>

          <div className="form-group">
            <label>Type of Location</label>

            <select>
              <option>Home</option>

              <option>Office</option>

              <option>Hospital</option>
            </select>
          </div>

          <div className="form-group">
            <label>Address Line 1 *</label>

            <input type="text" />
          </div>

          <div className="form-group">
            <label>Address Line 2</label>

            <input type="text" />
          </div>

          <div className="row">
            <div className="form-group">
              <label>City *</label>

              <input type="text" />
            </div>

            <div className="form-group">
              <label>State *</label>

              <select>
                <option>New Jersey</option>

                <option>New York</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="form-group">
              <label>Zip Code *</label>

              <input type="text" />
            </div>

            <div className="form-group">
              <label>Country *</label>

              <select>
                <option>United States</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="form-group">
              <label>Phone *</label>

              <input type="text" />
            </div>

            <div className="form-group">
              <label>Email</label>

              <input type="email" />
            </div>
          </div>

          <div className="form-group">
            <label>Message</label>

            <textarea rows="4"></textarea>
          </div>

          <div className="checkout-footer">
            <button className="back-btn" onClick={() => navigate("/cart")}>
              ← Back to Cart
            </button>

            <button className="checkout-btn">Continue to Payment →</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
