import "../Style/Certificates.css";
import { FaAward } from "react-icons/fa";

export default function Certificates() {
  const certificates = [
    {
      title: "Fundamentals of Digital Marketing",
      issuer: "Google Skillshop",
      year: "2026",
    },
    {
      title: "Business Communication",
      issuer: "Grow with Google",
      year: "2026",
    },
    {
      title: "Effective Leadership",
      issuer: "HP LIFE",
      year: "2026",
    },
    {
      title: "Basics of Finance",
      issuer: "HP LIFE",
      year: "2026",
    },
    {
      title: "Cash Flow",
      issuer: "HP LIFE",
      year: "2026",
    },
    {
      title: "Certificate in Information Technology",
      issuer: "CIT",
      year: "",
    },
  ];

  return (
    <section className="certificates" id="certificates">
      <div className="section-header">
        <span>ACHIEVEMENTS</span>
        <h2>Certifications</h2>
      </div>

      <div className="certificates-grid">
        {certificates.map((certificate, index) => (
          <div className="certificate-card" key={index}>
            <div className="certificate-icon">
              <FaAward />
            </div>

            <div className="certificate-content">
              <h3>{certificate.title}</h3>

              <p>
                {certificate.issuer}
                {certificate.year && ` • ${certificate.year}`}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}