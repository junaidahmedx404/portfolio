import "../Style/Experience.css";

const experiences = [
  {
    title: "Freelance Web Developer & Digital Support",
    company: "Self-Employed",
    period: "2023 - Present",
    description:
      "Developed responsive websites using WordPress and MERN Stack technologies. Created e-commerce and clinic management systems while providing digital support and client services.",
  },
  {
    title: "Customer Service Representative",
    company: "Call Center & Web Development Agency",
    period: "Part-Time",
    description:
      "Handled customer communication, resolved service inquiries, and collaborated with team members to achieve operational goals in a fast-paced environment.",
  },
  {
    title: "Family Business Assistant",
    company: "Milk & Butter Shop",
    period: "Part-Time",
    description:
      "Supported daily business operations, inventory management, sales activities, and customer relations while gaining practical business experience.",
  },
];

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="section-header">
        <span>EXPERIENCE</span>
        <h2>Professional Journey</h2>
      </div>

      <div className="timeline">
        {experiences.map((item, index) => (
          <div
            key={index}
            className={`timeline-item ${
              index % 2 === 0 ? "left" : "right"
            }`}
          >
            <div className="timeline-content">
              <span className="timeline-period">
                {item.period}
              </span>

              <h3>{item.title}</h3>

              <h4>{item.company}</h4>

              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}