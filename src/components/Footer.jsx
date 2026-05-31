import "../Style/Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-divider"></div>

      <div className="footer-content">
        <h2>
          Junaid Ahmed <span>Bhatti</span>
        </h2>

        <p>Business Analyst • Freelance Web Developer • BBA Student</p>

        <div className="footer-socials">
          <a
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a href="mailto:your@email.com" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>

        <a href="#hero" className="scroll-top">
          <FaArrowUp />
        </a>

        <div className="footer-bottom">
          <p>© {currentYear} Junaid Ahmed Bhatti. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
