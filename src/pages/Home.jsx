// import { Link } from "react-router-dom";
// import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
// import hero from "../assets/images/lily.png";
// import rose from "../assets/images/rose.png";
// import lily from "../assets/images/lily.png";
// import sunflower from "../assets/images/sunflower.png";
// import bouquet from "../assets/images/bouquet.png";

// import "../pages/Home.scss";

// function Home() {
//   return (
//     <div>
//       {/* Hero Section */}
//       {/* <section className="hero-section">
//         <div className="hero-content">
//           <h1 className="hero-title">Nirnaya Florals 🌸</h1>

//           <h2 className="hero-subtitle">Fresh Flowers Delivered With Love</h2>

//           <p className="hero-description">
//             We create beautiful bouquets using hand-picked fresh flowers for
//             birthdays, anniversaries, weddings and every special occasion.
//           </p>

//           <Link to="/flowers">
//             <button className="shop-btn">Shop Now</button>
//           </Link>

//           <Link to="/flowers">
//             <button className="explore-btn">Explore Collection</button>
//           </Link>
//         </div>

//         <div className="hero-image">
//           <img src={hero} alt="Flowers" />
//         </div>
//       </section> */}
//       <section className="hero">
//         <div className="hero-content">
//           <h1>Flowers</h1>
//           <p>Flowers from the heart</p>
//           <button>Shop Now</button>
//         </div>

//         <div className="hero-image">
//           <img src={hero} />
//         </div>
//       </section>

//       <section className="features"></section>
//       {/* Featured Flowers Section */}

//       <section className="featured-section">
//         <h1 className="featured-title">Featured Flowers 💐</h1>

//         <p className="featured-subtitle">
//           Discover our most loved flower collections.
//         </p>

//         <div className="featured-cards">
//           {/* Rose */}
//           <div className="flower-card">
//             <div className="flower-image">
//               <img src={rose} alt="Rose Bouquet" />
//             </div>

//             <div className="flower-content">
//               <h3>Rose Bouquet</h3>
//               {/* <p>$25</p> */}
//             </div>
//           </div>

//           {/* Lily */}
//           <div className="flower-card">
//             <div className="flower-image">
//               <img src={lily} alt="Lily Collection" />
//             </div>
//             <div className="flower-content">
//               <h3>Lily Collection</h3>
//               {/* <p>$30</p> */}
//             </div>
//           </div>

//           {/* Sunflower */}
//           <div className="flower-card">
//             <div className="flower-image">
//               <img src={sunflower} alt="Sunflower Basket" />
//             </div>

//             <div className="flower-content">
//               <h3>Sunflower Basket</h3>
//               {/* <p>$35</p> */}
//             </div>
//           </div>

//           {/* Mixed Bouquet */}
//           <div className="flower-card">
//             <div className="flower-image">
//               <img src={bouquet} alt="Mixed Bouquet" />
//             </div>

//             <div className="flower-content">
//               <h3>Mixed Bouquet</h3>
//               {/* <p>$40</p> */}
//             </div>
//           </div>
//         </div>

//         <div className="featured-btn-container">
//           <Link to="/flowers">
//             <button className="featured-btn">View All Flowers</button>
//           </Link>
//         </div>
//       </section>

//       {/* Why Choose Us Section */}
//       <section className="why-section">
//         <h1 className="why-title">Why Choose us?</h1>

//         <p className="why-subtitle">
//           We deliver happiness through beautiful flowers and exceptional
//           service.
//         </p>

//         <div className="why-cards">
//           <div className="why-card">
//             <h1 className="card-icon">🌹</h1>
//             <h3>Fresh Flowers</h3>
//             <p>Hand-picked fresh flowers carefully selected every day.</p>
//           </div>

//           <div className="why-card">
//             <h1 className="card-icon">🚚</h1>
//             <h3>Fast Delivery</h3>
//             <p>
//               Same-day and next-day delivery available for your special moments.
//             </p>
//           </div>

//           <div className="why-card">
//             <h1 className="card-icon">💝</h1>
//             <h3>Premium Quality</h3>
//             <p>Beautiful bouquets designed by experienced floral artists.</p>
//           </div>

//           <div className="why-card">
//             <h1 className="card-icon">😊</h1>
//             <h3>5000+ Happy Customers</h3>
//             <p>Thousands of satisfied customers trust us for every occasion.</p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Home;

import Hero from "../components/Hero";
import Features from "../components/Features";
import FeaturedFlowers from "../components/FeaturedFlowers";
import Testimonials from "../components/Testimonials";
import About from "../components/About";

function Home() {
  return (
    <div className="home-container">
      <Hero />

      <FeaturedFlowers />

      <Features />

      <Testimonials />

      <About />
    </div>
  );
}

export default Home;
