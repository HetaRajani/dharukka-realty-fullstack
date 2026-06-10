import { useState } from "react";
import { Link } from "react-router-dom";
import "./ProjectsPage.css";

const projects = [
  {
    id: "premium-villas",
    status: "ONGOING",
    category: "RESIDENTIAL",
    location: "ANAND, GUJARAT",
    title: "Dharukka Premium Villas",
    desc: "Premium villas designed for modern family living.",
    img: "/project1.jpeg",
  },
  {
    id: "twin-residences",
    status: "COMPLETED",
    category: "RESIDENTIAL",
    location: "GUJARAT",
    title: "Dharukka Twin Residences",
    desc: "Elegant residential homes with trusted construction quality.",
    img: "/project2.jpeg",
  },
  {
    id: "luxury-homes",
    status: "UPCOMING",
    category: "RESIDENTIAL",
    location: "GUJARAT",
    title: "Dharukka Luxury Homes",
    desc: "A luxury address crafted for future generations.",
    img: "/project3.jpeg",
  },
];

const tabs = ["ALL", "ONGOING", "COMPLETED", "UPCOMING", "RESIDENTIAL"];

function ProjectsPage() {
  const [activeTab, setActiveTab] = useState("ALL");

  const filteredProjects =
    activeTab === "ALL"
      ? projects
      : projects.filter(
          (project) =>
            project.status === activeTab || project.category === activeTab
        );

  return (
    <main className="portfolio-page">
      <section className="portfolio-hero">
        <p className="portfolio-label">THE PORTFOLIO</p>

        <h1>
          Landmarks across Gujarat’s <br />
          most trusted addresses.
        </h1>

        <p className="portfolio-desc">
          From premium villas to elegant residential homes — every Dharukka
          project is built with quality, trust, and timeless value.
        </p>

        <div className="portfolio-tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={activeTab === tab ? "active" : ""}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </section>

      <section className="portfolio-grid">
        {filteredProjects.map((project) => (
          <Link
            to={`/project/${project.id}`}
            className="portfolio-card"
            key={project.id}
          >
            <div className="portfolio-image-box">
              <img src={project.img} alt={project.title} />
              <span className="portfolio-status">{project.status}</span>
            </div>

            <div className="portfolio-info">
              <small>✦ {project.location}</small>

              <h3>{project.title}</h3>

              <div className="gold-line"></div>

              <p>{project.desc}</p>

              <span className="explore-link">EXPLORE PROJECT →</span>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}

export default ProjectsPage;