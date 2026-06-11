import { Link } from "react-router-dom";
import "./About.scss";

function About() {
  return (
    <div className="about-page">
      <div className="about-container">
        <h1 className="about-title">About Nirnaya Florals 🌸</h1>

        <p className="about-subtitle">
          Bringing beauty, fragrance, and happiness through fresh flowers for
          every special moment in your life.
        </p>

        <div className="about-content">
          <div className="about-text">
            <h2>Our Story</h2>

            <p>
              At <strong>Nirnaya Florals</strong>, we believe flowers are more
              than just gifts—they are a language of love, appreciation, and
              celebration. Every bouquet is thoughtfully designed using fresh,
              handpicked flowers to create unforgettable memories.
            </p>

            <p>
              Whether you're celebrating a birthday, anniversary, wedding,
              graduation, or simply expressing your emotions, our floral
              collections are crafted with passion and creativity to make every
              occasion special.
            </p>

            <p>
              Our mission is to deliver premium-quality flowers with exceptional
              service while spreading happiness to every doorstep.
            </p>

            <Link to="/flowers">
              <button className="about-btn">Explore Our Collection</button>
            </Link>
          </div>

          <div className="about-features">
            <div className="feature-card">
              <h1>🌹</h1>
              <h3>Fresh Flowers</h3>
              <p>Handpicked daily from trusted growers.</p>
            </div>

            <div className="feature-card">
              <h1>🚚</h1>
              <h3>Fast Delivery</h3>
              <p>Same-day and scheduled delivery available.</p>
            </div>

            <div className="feature-card">
              <h1>💐</h1>
              <h3>Beautiful Bouquets</h3>
              <p>Expertly crafted floral arrangements.</p>
            </div>

            <div className="feature-card">
              <h1>😊</h1>
              <h3>Happy Customers</h3>
              <p>Delivering smiles and memorable moments.</p>
            </div>
          </div>
        </div>

        <div className="about-stats">
          <div className="stat">
            <h2>5000+</h2>
            <p>Happy Customers</p>
          </div>

          <div className="stat">
            <h2>100+</h2>
            <p>Flower Varieties</p>
          </div>

          <div className="stat">
            <h2>24/7</h2>
            <p>Customer Support</p>
          </div>

          <div className="stat">
            <h2>100%</h2>
            <p>Freshness Guaranteed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
