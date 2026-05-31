import "../Style/Contact.css";
import {
  FaEnvelope,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="section-header">
        <span>CONTACT</span>
        <h2>Let's Work Together</h2>
      </div>

      <div className="contact-container">

        <div className="contact-info">
          <h3>Get In Touch</h3>

          <p>
            I'm always open to discussing internship
            opportunities, freelance projects, business
            collaborations, and new ideas.
          </p>

          <div className="contact-item">
            <FaEnvelope />
            <span>junaidahmed.bba@gmail.com</span>
          </div>

          <div className="contact-item">
            <FaLinkedin />
            <span>
              linkedin.com/in/junaidahmedbba
            </span>
          </div>

          <div className="contact-item">
            <FaMapMarkerAlt />
            <span>Pakistan</span>
          </div>
        </div>

        <form className="contact-form">
          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <input
            type="text"
            placeholder="Subject"
          />

          <textarea
            rows="6"
            placeholder="Your Message"
          ></textarea>

          <button type="submit">
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
}