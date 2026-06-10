import "./Testimonials.css";

const testimonials = [
  {
    text: "Dharukka delivered our home with excellent quality and clear communication. The craftsmanship still impresses us every day.",
    name: "Vikram & Anaya Patel",
    project: "DHARUKKA PREMIUM VILLAS · ANAND",
  },
  {
    text: "The team understood our expectations perfectly. From planning to possession, everything felt professional and transparent.",
    name: "Rohan Shah",
    project: "DHARUKKA TWIN RESIDENCES · GUJARAT",
  },
  {
    text: "A beautiful home, trusted construction, and a very smooth buying experience. We truly felt supported at every step.",
    name: "Dr. Meera Desai",
    project: "DHARUKKA LUXURY HOMES · GUJARAT",
  },
];

function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <p className="section-label">VOICES OF DHARUKKA</p>

        <h2>
          The families who call <br />
          our spaces <span>home.</span>
        </h2>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((item, index) => (
          <div className={`testimonial-card ${index === 1 ? "active" : ""}`} key={index}>
            <div className="quote">”</div>

            <p className="testimonial-text">"{item.text}"</p>

            <div className="client-info">
              <h4>{item.name}</h4>
              <span>{item.project}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;