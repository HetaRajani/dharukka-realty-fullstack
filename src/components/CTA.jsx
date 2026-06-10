import "./CTA.css";
import { Link } from "react-router-dom";

function CTA() {
  return (
    <>
      <section className="cta-section" id="visit">
        <div className="cta-overlay"></div>

        <div className="cta-content">
          <p className="cta-label">PRIVATE PREVIEW</p>

          <h2>
            Step inside a Dharukka <br />
            home — by appointment only.
          </h2>

          <p className="cta-desc">
            Book a private site visit with our team.
            Limited slots available each week.
          </p>

          <Link to="/schedule-visit" className="cta-btn">
            SCHEDULE A VISIT →
          </Link>
        </div>
      </section>

      <div className="cta-white-gap"></div>
    </>
  );
}

export default CTA;