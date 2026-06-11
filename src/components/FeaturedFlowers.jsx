import rose from "../assets/images/rose.png";
import lily from "../assets/images/lily.png";
import sunflower from "../assets/images/sunflower.png";
import bouquet from "../assets/images/bouquet.png";
import "./FeaturedFlowers.scss";

function FeaturedFlowers() {
  const flowers = [
    {
      name: "Rose Bouquet",
      price: "$25",
      image: rose,
    },
    {
      name: "Lily Collection",
      price: "$30",
      image: lily,
    },
    {
      name: "Sunflower Basket",
      price: "$35",
      image: sunflower,
    },
    {
      name: "Mixed Bouquet",
      price: "$40",
      image: bouquet,
    },
  ];

  return (
    <section className="featured">
      <h2>Shop Fresh Flowers</h2>

      <p>Explore our handpicked floral collection.</p>

      <div className="flower-grid">
        {flowers.map((flower, index) => (
          <div className="flower-card" key={index}>
            <img src={flower.image} alt={flower.name} />

            <div className="flower-info">
              <h3>{flower.name}</h3>

              {/* <p>⭐⭐⭐⭐⭐</p> */}

              {/* <p>{flower.price}</p> */}

              {/* <button>Add To Cart</button> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedFlowers;
