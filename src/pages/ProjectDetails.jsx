import { useParams, Link } from "react-router-dom";
import "./ProjectDetails.css";

const projectData = {
  "premium-villas": {
    title: "Dharukka Premium Villas",
    subtitle: "Premium villas designed for modern family living.",
    location: "Anand, Gujarat",
    status: "Ongoing",
    hero: "/project1.jpeg",
  },
  "twin-residences": {
    title: "Dharukka Twin Residences",
    subtitle: "Elegant residential homes with trusted construction quality.",
    location: "Gujarat",
    status: "Completed",
    hero: "/project2.jpeg",
  },
  "luxury-homes": {
    title: "Dharukka Luxury Homes",
    subtitle: "A luxury address crafted for future generations.",
    location: "Gujarat",
    status: "Upcoming",
    hero: "/project3.jpeg",
  },
};

function ProjectDetails() {
  const { id } = useParams();
  const project = projectData[id] || projectData["premium-villas"];

  return (
    <main className="pd-page">
      <section
        className="pd-hero"
        style={{ backgroundImage: `url(${project.hero})` }}
      >
        <div className="pd-overlay"></div>

        <div className="pd-hero-content">
          <Link to="/projects" className="pd-back">← All Projects</Link>

          <p>{project.status} · Residential</p>

          <h1>{project.title}</h1>

          <h4>{project.subtitle}</h4>

          <span>⌖ {project.location}</span>
        </div>
      </section>

      <section className="pd-overview">
        <div>
          <p className="pd-label">OVERVIEW</p>

          <h2>
            A premium residential landmark designed with modern architecture,
            trusted quality and timeless value for families.
          </h2>
        </div>

        <div className="pd-stats">
          <div><span>Status</span><strong>{project.status}</strong></div>
          <div><span>Typology</span><strong>Premium Residences</strong></div>
          <div><span>Location</span><strong>{project.location}</strong></div>
          <div><span>Completion</span><strong>2027</strong></div>
          <div><span>Progress</span><strong>68%</strong></div>
        </div>
      </section>

      <section className="pd-gallery">
        <p className="pd-label">GALLERY</p>
        <h2>A closer look.</h2>

        <div className="pd-gallery-grid">
          <img src="/project1.jpeg" alt="Project view" />
          <img src="/about.jpg" alt="Interior view" />
          <img src="/project2.jpeg" alt="Residence view" />
        </div>
      </section>

      <section className="pd-features">
        <div>
          <p className="pd-label">PROJECT HIGHLIGHTS</p>
          <h2>What sets it apart.</h2>

          <ul>
            <li>Premium modern architecture</li>
            <li>Trusted construction quality</li>
            <li>Spacious family residences</li>
            <li>Peaceful residential environment</li>
          </ul>
        </div>

        <div>
          <p className="pd-label">AMENITIES</p>
          <h2>A life, fully serviced.</h2>

          <div className="pd-amenities">
            <span>Landscaped garden</span>
            <span>24×7 security</span>
            <span>Parking space</span>
            <span>Children play area</span>
            <span>Club house</span>
            <span>Peaceful community</span>
          </div>
        </div>
      </section>

      <section className="pd-inquire">
        <div>
          <p className="pd-label">INQUIRE</p>
          <h2>
            Request a private <br />
            walkthrough of <br />
            {project.title}.
          </h2>

          <p className="pd-note">
            Our team will be in touch within 24 hours.
          </p>

          <div className="pd-buttons">
            <a href="tel:+919876543210">CALL NOW</a>
            <a href="https://wa.me/919876543210">WHATSAPP</a>
          </div>
        </div>

        <form className="pd-form">
          <input type="text" placeholder="Full name" />
          <input type="email" placeholder="Email address" />
          <input type="tel" placeholder="Phone number" />
          <textarea placeholder="Tell us about your requirement"></textarea>
          <button type="submit">REQUEST INVITATION</button>
        </form>
      </section>
    </main>
  );
}

export default ProjectDetails;