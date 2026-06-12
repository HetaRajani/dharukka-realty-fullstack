import "./About.css";

function About() {
  return (
    <section className="about-section">
      <div className="about-image">
        <img src="/about-realistic.jpg" alt="Dharukka Realty Design" />
        <div className="about-badge">
          <h3>26+</h3>
          <p>Years of Excellence</p>
        </div>
      </div>

      <div className="about-content">
        <p className="about-label">WHO WE ARE</p>

        <h2>
          Creating landmarks.
          <br />
          <span>Building trust.</span>
        </h2>

        <p className="about-desc">
          Dharukka Realty creates premium residential spaces with thoughtful
          planning, quality construction and timeless design. Every project is
          built with trust, detail and long-term value for families.
        </p>

        <div className="about-cards">
          <div>
            <h4>Mission</h4>
            <p>To build homes that enrich lifestyles and create lasting value.</p>
          </div>

          <div>
            <h4>Vision</h4>
            <p>To become a trusted real estate developer known for quality.</p>
          </div>

          <div>
            <h4>Quality</h4>
            <p>Every project is crafted with premium materials and care.</p>
          </div>

          <div>
            <h4>Trust</h4>
            <p>Transparent work, timely delivery and strong relationships.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;