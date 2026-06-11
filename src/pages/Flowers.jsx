import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../services/client";
import "./Flowers.scss";

function Flowers() {
  const navigate = useNavigate();

  const [flowers, setFlowers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchFlowers = async () => {
      try {
        const response = await fetch(`${BASE_URL}/flowers`);

        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();
        setFlowers(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load flowers.");
      } finally {
        setLoading(false);
      }
    };

    fetchFlowers();
  }, []);

  const addToCart = (flower) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingItem = cart.find((item) => item.id === flower.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({
        id: flower.id,
        name: flower.name,
        price: flower.price,
        image: `${BASE_URL}/uploads/${flower.image}`,
        quantity: 1,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    // Redirect to Cart page
    navigate("/cart");
  };

  if (loading) {
    return <h2>Loading flowers...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  const filteredFlowers = flowers.filter((flower) =>
    flower.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="flowers-page">
      <h1 className="flowers-title">Flowers Collection 🌸</h1>

      <div className="search-box">
        <input
          type="text"
          placeholder="🔍 Search flowers..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {filteredFlowers.length === 0 ? (
        <h2 className="no-data">No flowers found 🌸</h2>
      ) : (
        <div className="flowers-grid">
          {filteredFlowers.map((flower) => (
            <div className="flower-card" key={flower.id}>
              {flower.image ? (
                <img
                  src={`${BASE_URL}/uploads/${flower.image}`}
                  alt={flower.name}
                />
              ) : (
                <div className="placeholder">🌸</div>
              )}

              <div className="flower-content">
                <h2>{flower.name}</h2>

                <p className="options">Fresh hand-picked bouquet</p>

                <p className="price-label">Starting at</p>

                <h1 className="price">${flower.price}</h1>

                <button className="add-btn" onClick={() => addToCart(flower)}>
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Flowers;
