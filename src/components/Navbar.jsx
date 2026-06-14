import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import resumePDF from "../assets/Junaid_Ahmed_BBA.pdf";
import "../Style/Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", link: "#about" },
    { name: "Experience", link: "#experience" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Certificates", link: "#certificates" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <>
      <nav className="navbar">
        <a href="#hero" className="logo">
          <span>JA</span>
        </a>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          {navLinks.map((item, index) => (
            <li key={index}>
              <a href={item.link} onClick={() => setMenuOpen(false)}>
                {item.name}
              </a>
            </li>
          ))}

          <li>
            <a
              href={resumePDF}
              target="_blank"
              rel="noopener noreferrer"
              className="resume-btn"
              onClick={() => setMenuOpen(false)}
            >
              Resume
            </a>
          </li>
        </ul>

        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>

      {menuOpen && (
        <div className="nav-overlay" onClick={() => setMenuOpen(false)} />
      )}
    </>
  );
}
