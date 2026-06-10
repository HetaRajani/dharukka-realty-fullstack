import "./Projects.css";
import { Link } from "react-router-dom";

const projects = [
  {
    id: "premium-villas",
    status: "ONGOING",
    location: "ANAND, GUJARAT",
    title: "Dharukka Premium Villas",
    desc: "Premium villas designed for modern family living.",
    img: "/project1.jpeg",
  },
  {
    id: "twin-residences",
    status: "COMPLETED",
    location: "GUJARAT",
    title: "Dharukka Twin Residences",
    desc: "Elegant residential homes with trusted construction quality.",
    img: "/project2.jpeg",
  },
  {
    id: "luxury-homes",
    status: "UPCOMING",
    location: "GUJARAT",
    title: "Dharukka Luxury Homes",
    desc: "A luxury address crafted for future generations.",
    img: "/project3.jpeg",
  },
];

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-header">
        <div>
          <p className="section-label">FEATURED PORTFOLIO</p>

          <h2>
            Projects built for <br />
            future generations.
          </h2>

          <p className="projects-desc">
            Thoughtfully designed spaces that blend modern architecture with
            lasting value and timeless elegance.
          </p>
        </div>

        <Link to="/projects" className="view-link">
          VIEW ALL PROJECTS →
        </Link>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <Link
            to={`/project/${project.id}`}
            className="project-card"
            key={project.id}
          >
            <div className="project-image">
              <img src={project.img} alt={project.title} />
              <span className="project-status">{project.status}</span>
            </div>

            <div className="project-content">
              <small>✦ {project.location}</small>
              <h3>{project.title}</h3>
              <div className="gold-line"></div>
              <p>{project.desc}</p>
              <span className="explore-link">EXPLORE PROJECT →</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Projects;