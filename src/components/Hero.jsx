import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Hero.scss";

import slide1 from "../assets/images/slide1.png";
import slide2 from "../assets/images/slide2.png";
import slide3 from "../assets/images/slide3.png";
import slide4 from "../assets/images/slide4.png";
import slide5 from "../assets/images/slide5.png";
import slide6 from "../assets/images/slide6.png";

function Hero() {
  const images = [slide1, slide2, slide3, slide4, slide5, slide6];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="hero-left">
        <h3>Flowers brings happiness</h3>

        <h1>Flowers</h1>

        <p>Fresh flowers crafted to express every emotion and celebration.</p>

        <div className="hero-buttons">
          <Link to="/flowers">
            <button className="shop-btn">Shop Now</button>
          </Link>

          <Link to="/flowers">
            <button className="explore-btn">Explore</button>
          </Link>
        </div>
      </div>

      <div className="hero-right">
        <img src={images[current]} alt="Flowers" />
      </div>
    </section>
  );
}

export default Hero;
