function Testimonials() {
  const reviews = [
    {
      name: "Sophia",
      review: "Beautiful flowers and amazing service.",
    },
    {
      name: "Emma",
      review: "Fresh flowers delivered on time.",
    },
    {
      name: "Olivia",
      review: "Loved the bouquet quality.",
    },
  ];

  return (
    <section className="testimonials">
      <h2>What Our Customers Say</h2>

      <div className="review-grid">
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <h3>{review.name}</h3>

            <p>⭐⭐⭐⭐⭐</p>

            <p>{review.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
