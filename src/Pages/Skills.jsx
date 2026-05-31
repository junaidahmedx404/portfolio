import "../Style/Skills.css";
import {
  FaChartLine,
  FaLaptopCode,
  FaBullhorn,
  FaBriefcase,
} from "react-icons/fa";

export default function Skills() {
  const skillCategories = [
    {
      icon: <FaBriefcase />,
      title: "Business",
      skills: [
        "Business Analysis",
        "Business Communication",
        "Customer Service",
        "Client Management",
        "Problem Solving",
      ],
    },

    {
      icon: <FaChartLine />,
      title: "Analytics",
      skills: [
        "Microsoft Excel",
        "Business Reporting",
        "Trend Analysis",
        "Data Visualization",
        "KPI Tracking",
      ],
    },

    {
      icon: <FaLaptopCode />,
      title: "Technology",
      skills: [
        "React JS",
        "WordPress",
        "MERN Stack",
        "Canva",
        "Microsoft Office",
      ],
    },

    {
      icon: <FaBullhorn />,
      title: "Marketing",
      skills: [
        "Digital Marketing",
        "Social Media Marketing",
        "Content Creation",
        "Customer Engagement",
      ],
    },
  ];

  return (
    <section className="skills" id="skills">
      <div className="section-header">
        <span>MY EXPERTISE</span>
        <h2>Skills & Capabilities</h2>
      </div>

      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">
              {category.icon}
            </div>

            <h3>{category.title}</h3>

            <ul>
              {category.skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}