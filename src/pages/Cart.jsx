import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "./Cart.scss";

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCart(storedCart);
  }, []);

  const increaseQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
    );

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const navigate = useNavigate();

  const handleCheckout = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    if (!isLoggedIn) {
      navigate("/login");
      return;
    }

    navigate("/checkout");
  };
  const decreaseQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: item.quantity > 1 ? item.quantity - 1 : 1,
          }
        : item,
    );

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);

    setCart(updatedCart);

    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <div className="cart-container">
      <h1 className="cart-title">Shopping Cart 🛒</h1>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <h2>Your cart is empty</h2>

          <Link to="/flowers">
            <button className="continue-btn">Continue Shopping</button>
          </Link>
        </div>
      ) : (
        <>
          {cart.map((item) => (
            <div className="cart-card" key={item.id}>
              <div className="cart-image">
                {item.image ? (
                  <img src={item.image} alt={item.name} />
                ) : (
                  <div className="placeholder">🌸</div>
                )}
              </div>

              <div className="cart-info">
                <h2>{item.name}</h2>

                <p>
                  <strong>Price:</strong> ${item.price}
                </p>

                <div className="quantity-box">
                  <strong>Quantity:</strong>

                  <button onClick={() => decreaseQuantity(item.id)}>-</button>

                  <span>{item.quantity}</span>

                  <button onClick={() => increaseQuantity(item.id)}>+</button>
                </div>

                <p>
                  <strong>Subtotal:</strong> ${item.price * item.quantity}
                </p>

                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="cart-footer">
            <Link to="/flowers">
              <button className="continue-btn">← Continue Shopping</button>
            </Link>

            <h2>Total: ${totalPrice.toFixed(2)}</h2>

            <button className="checkout-btn" onClick={handleCheckout}>
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
