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

            <h2>Meet the Developer 👩‍💻✨</h2>

            <p
              style={{
                fontStyle: "italic",
                fontSize: "15px",
                lineHeight: "1.9",
                color: "#555",
                background: "#fff8fc",
                padding: "20px",
                borderLeft: "5px solid #d63384",
                borderRadius: "10px",
                marginTop: "15px",
              }}
            >
              "Hello and welcome! I'm <strong>Pranaya Reddy</strong>, the
              creator and developer behind <strong>Nirnaya Florals</strong>.
              This website is more than just a flower shop—it's a reflection of
              my passion for building beautiful, scalable, and user-friendly
              applications using{" "}
              <strong>
                React, JavaScript, Python, FastAPI, SQL, REST APIs, and modern
                web technologies
              </strong>
              .
              <br />
              <br />
              Every page, component, API, and feature you see here was designed
              and developed by me with dedication, creativity, and countless
              hours of learning and problem-solving. My goal was to combine the
              elegance of flowers with the power of technology to create a
              seamless digital experience.
              <br />
              <br />
              As a Full-Stack Software Developer, I enjoy transforming ideas
              into real-world applications that are responsive, secure, and
              visually engaging. This project demonstrates my experience in
              frontend development, backend development, authentication, REST
              APIs, database management, cloud deployment, and modern software
              architecture.
              <br />
              <br />
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
            <h2>5000 +</h2>
            <p>Happy customers</p>
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
