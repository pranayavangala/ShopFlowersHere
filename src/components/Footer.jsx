import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h2>Nirnaya Florals 🌸</h2>

        <p className="footer-tagline">
          Delivering happiness through beautiful flowers.
        </p>

        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/flowers">Flowers</a>
          <a href="/cart">Cart</a>
          <a href="/login">Login</a>
        </div>

        <p className="footer-copy">
          © 2026 Nirnaya Florals. All Rights Reserved by Pranaya Reddy Vangala
        </p>
      </div>
    </footer>
  );
}

export default Footer;
