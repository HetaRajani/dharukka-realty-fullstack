import "./About.css";

function About() {
  return (
    <section className="about-section" id="about">

      <div className="about-image">
        <img src="/about.jpg" alt="Dharukka Reality" />
      </div>

      <div className="about-content">

        <p className="about-small">WHO WE ARE</p>

        <h2>
          Premium living with
          <span> trusted craftsmanship.</span>
        </h2>

        <p className="about-desc">
          For over two decades, Dharukka Reality has been creating premium
          residential spaces that combine modern design, trusted construction
          quality, and long-term value for families.
        </p>

        <div className="about-cards">

          <div className="card">
            <h3>Mission</h3>
            <p>
              To develop homes that enrich lifestyles and create lasting value
              for future generations.
            </p>
          </div>

          <div className="card">
            <h3>Vision</h3>
            <p>
              To be one of the most trusted and respected real estate
              developers in the region.
            </p>
          </div>

          <div className="card">
            <h3>Quality</h3>
            <p>
              Every project is built with attention to detail, premium
              materials, and superior workmanship.
            </p>
          </div>

          <div className="card">
            <h3>Trust</h3>
            <p>
              Transparent dealings, timely delivery, and strong relationships
              with every customer.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;