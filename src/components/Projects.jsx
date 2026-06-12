import "./Projects.css";
import { Link } from "react-router-dom";

function Projects() {
return ( <section className="featured-project-section" id="projects">

```
  <div className="featured-header">
    <span>FEATURED ONGOING PROJECT</span>

    <h2>Rameshvar Bunglow</h2>

    <p>📍 Akvada, Bhavnagar</p>
  </div>

  <div className="featured-project-card">

    <div className="featured-image">
      <img
        src="/dharukka-premium-villas-hero.jpg"
        alt="Rameshvar Bunglow"
      />
    </div>

    <div className="featured-content">

      <span className="status">● ONGOING</span>

      <h3>Rameshvar Bunglow</h3>

      <div className="gold-line"></div>

      <p>
        Thoughtfully designed 1, 2 & 3 BHK homes with modern planning,
        quality construction and premium amenities.
      </p>

      <div className="project-features">

        <div className="feature">
          <h4>🏠</h4>
          <span>1, 2 & 3 BHK Homes</span>
        </div>

        <div className="feature">
          <h4>📍</h4>
          <span>Akvada, Bhavnagar</span>
        </div>

        <div className="feature">
          <h4>⭐</h4>
          <span>Premium Lifestyle</span>
        </div>

      </div>

      <Link
        to="/project/rameshvar-bunglow"
        className="view-project-btn"
      >
        View Project →
      </Link>

    </div>

  </div>

</section>


);
}

export default Projects;
