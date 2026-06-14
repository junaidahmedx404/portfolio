import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../Style/Contact.css";
import {
  FaEnvelope,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Contact() {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    emailjs
      .sendForm(
        "service_r9ranvp",
        "template_vaav6y6",
        form.current,
        "jwUysCbJEHwKBZyrY"
      )
      .then(
        () => {
          setLoading(false);
          setMessage("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          setLoading(false);
          setMessage("Failed to send message. Please try again.");
          console.error(error);
        }
      );
  };

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
            <span>junaidahmedbhatti28@gmail.com</span>
          </div>

          <div className="contact-item">
            <FaLinkedin />
            <span>linkedin.com/in/junaidahmed28</span>
          </div>

          <div className="contact-item">
            <FaMapMarkerAlt />
            <span>Pakistan</span>
          </div>
        </div>

        <form
          ref={form}
          className="contact-form"
          onSubmit={sendEmail}
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
          />

          <textarea
            rows="6"
            name="message"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>

          {message && (
            <p
              style={{
                marginTop: "10px",
                textAlign: "center",
              }}
            >
              {message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}