import "../Style/About.css";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="section-header">
        <span>ABOUT ME</span>
        <h2>Get To Know Me</h2>
      </div>

      <div className="about-grid">

        <div className="about-card">
          <h3>My Journey</h3>
          <p>
            I am a BBA student passionate about business,
            analytics, technology, and entrepreneurship.
            Through freelance projects, customer service,
            and business operations, I have developed
            practical skills beyond the classroom.
          </p>
        </div>

        <div className="about-card">
          <h3>Education</h3>
          <p>
            Bachelor of Business Administration (BBA)
          </p>

          <div className="card-info">
            <span>University of Larkano</span>
            <span>CGPA: 3.2 / 4.0</span>
            <span>Expected Graduation: 2028</span>
          </div>
        </div>

        <div className="about-card">
          <h3>What I Do</h3>

          <ul>
            <li>Business Analysis</li>
            <li>Customer Service</li>
            <li>Web Development</li>
            <li>Digital Marketing</li>
            <li>Data Reporting</li>
          </ul>
        </div>

        <div className="about-card">
          <h3>Career Goal</h3>

          <p>
            My goal is to build a career where business
            strategy, technology, and data work together
            to solve real-world problems and create value.
          </p>
        </div>

      </div>
    </section>
  );
}