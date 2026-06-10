import "./Why.css";

const reasons = [
  {
    title: "Superior construction quality",
    desc: "Built with trusted materials, skilled workmanship, and strong structural standards.",
  },
  {
    title: "Transparent process",
    desc: "Clear documentation, honest pricing, and complete guidance at every step.",
  },
  {
    title: "Timely delivery",
    desc: "Projects planned and delivered with commitment, discipline, and responsibility.",
  },
  {
    title: "Premium materials",
    desc: "Quality finishes, modern fittings, and carefully selected construction materials.",
  },
  {
    title: "Expert team",
    desc: "Experienced architects, engineers, and craftsmen working together with precision.",
  },
  {
    title: "Customer satisfaction",
    desc: "Long-term relationships built through trust, service, and reliable support.",
  },
  {
    title: "Long-term value",
    desc: "Homes designed to offer comfort, durability, and value for future generations.",
  },
];

function Why() {
  return (
    <section className="why-section">
      <div className="why-left">
        <p className="why-label">WHY DHARUKKA</p>
        <h2>
          Seven reasons families <br />
          choose us, generation <br />
          after generation.
        </h2>
      </div>

      <div className="why-grid">
        {reasons.map((item, index) => (
          <div className="why-card" key={index}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Why;