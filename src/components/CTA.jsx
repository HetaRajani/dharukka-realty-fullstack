import "./CTA.css";
import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="cta-section" id="visit">
      <div className="cta-container">

        <div className="cta-left">
          <p className="cta-label">PRIVATE PREVIEW</p>

          <h2>
            Your Future Home <br />
            <span>Deserves a Personal Visit</span>
          </h2>

          <p className="cta-desc">
            Experience the elegance, space, and craftsmanship of
            Rameshvar Bungalow in person.
            Because some things are best felt, not just seen.
          </p>

          <div className="cta-buttons">
  <Link to="/schedule-visit" className="cta-primary">
    SCHEDULE A VISIT
  </Link>

  <Link to="/projects" className="cta-secondary-btn">
    VIEW PROJECT →
  </Link>
</div>
        </div>

        <div className="cta-right">
          <img
            src="/cta-luxury-interior.jpg"
            alt="Luxury Interior"
          />

          <div className="cta-card">
            <h4>Limited Slots</h4>
            <p>Available Each Week</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default CTA;