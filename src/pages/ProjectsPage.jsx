import "./ProjectsPage.css";
import { Link } from "react-router-dom";

function ProjectsPage() {
  return (
    <section className="projects-page">
      <div className="projects-header">
        <p className="section-label">FEATURED PROJECT</p>

        <h1>Rameshvar Bungalow</h1>

        <p className="projects-desc">
          Premium 1, 2 & 3 BHK homes thoughtfully designed with
          modern architecture, quality construction and family comfort.
        </p>
      </div>

      <div className="single-project-card">
        <div className="project-image">
          <img src="/hero-luxury-villa.jpg" alt="Rameshvar Bungalow" />
        </div>

        <div className="project-content">
          <span className="project-status">ONGOING</span>

          <h2>Rameshvar Bungalow</h2>

          <p>
            Located in Akvada, Bhavnagar. A premium residential
            project offering elegant homes with modern amenities,
            spacious planning and trusted construction quality.
          </p>

          <ul>
            <li>✓ 1, 2 & 3 BHK Homes</li>
            <li>✓ Modern Design</li>
            <li>✓ Premium Amenities</li>
            <li>✓ Prime Location</li>
          </ul>

          <Link to="/project/rameshvar" className="project-btn">
            View Details →
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProjectsPage;