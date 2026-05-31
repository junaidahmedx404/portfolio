import "../Style/Hero.css";
import profileImage from "../assets/Profile.jpeg";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <p className="hero-greeting">Hi, I'm</p>

        <h1 className="hero-title">
          Junaid Ahmed <span>Bhatti</span>
        </h1>

        <h2 className="hero-subtitle">
          BBA Student <span>|</span> Business Analyst <span>|</span>
          Freelance Web Developer
        </h2>

        <p className="hero-description">
          Passionate BBA student with experience in business operations,
          customer service, business analytics, and web development. I combine
          business knowledge with technology to build digital solutions and
          create meaningful impact.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">
            View Projects
          </a>

          <a href="/Junaid_Ahmed_BBA.pdf" download className="btn-secondary">
            Download Resume
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img src={profileImage} alt="Junaid Ahmed Bhatti" />
      </div>
    </section>
  );
}
