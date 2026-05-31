import "../Style/Projects.css";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Website",
      category: "MERN Stack",
      description:
        "Built a responsive e-commerce platform with product management, customer ordering, and modern UI components.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      demo: "#",
      github: "#",
    },

    {
      title: "Hospital Management System",
      category: "Web Application",
      description:
        "Developed a complete clinic management solution featuring appointment scheduling, patient records, and administrative controls.",
      technologies: ["React", "Node.js", "MongoDB"],
      demo: "#",
      github: "#",
    },

    {
      title: "E-Commerce Sales Dashboard",
      category: "Business Analytics",
      description:
        "Interactive Excel dashboard analyzing revenue trends, category performance, KPIs, and profitability metrics.",
      technologies: ["Excel", "Reporting", "Analytics"],
      demo: "#",
      github: "#",
    },

    {
      title: "Personal Budget Tracker",
      category: "Financial Analytics",
      description:
        "Excel-based budgeting system for monitoring income, expenses, savings, and monthly financial performance.",
      technologies: ["Excel", "Finance", "Charts"],
      demo: "#",
      github: "#",
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="section-header">
        <span>MY WORK</span>
        <h2>Featured Projects</h2>
      </div>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-left">
              <span className="project-category">{project.category}</span>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-tech">
                {project.technologies.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>
            </div>

            <div className="project-right">
              <a href={project.demo} target="_blank" rel="noreferrer">
                <FaExternalLinkAlt />
              </a>

              <a href={project.github} target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
