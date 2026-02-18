import { FaCode, FaServer, FaLaptopCode } from 'react-icons/fa';
import './About.css';

function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">About</span>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know me better</p>
        </div>

        <div className="about-content">
          <div className="about-left">
            <p className="about-text">
              I'm a passionate <strong>Junior Software Developer</strong> based in Chennai, India,
              currently working at <strong>Skillmine Technology Consulting</strong>. With a Master's
              degree in Computer Applications (MCA) and hands-on experience in building modern web
              applications, I bring a strong foundation in both frontend and backend development.
            </p>
            <p className="about-text">
              My expertise spans across Next.js, TypeScript, and OAuth, and I'm always eager to learn new
              technologies and contribute to impactful projects. I believe in writing clean, efficient
              code and building solutions that make a real difference.
            </p>

            <div className="about-stats">
              <div className="about-stat">
                <span className="about-stat-number">2+</span>
                <span className="about-stat-label">Years Experience</span>
              </div>
              <div className="about-stat">
                <span className="about-stat-number">12+</span>
                <span className="about-stat-label">Technologies</span>
              </div>
              <div className="about-stat">
                <span className="about-stat-number">MCA</span>
                <span className="about-stat-label">Master's Degree</span>
              </div>
            </div>
          </div>

          <div className="about-right">
            <div className="about-card">
              <div className="about-card-icon" aria-hidden="true">
                <FaLaptopCode />
              </div>
              <div className="about-card-text">
                <h3>Frontend Development</h3>
                <p>Building responsive and interactive user interfaces with React, Next.js & Tailwind</p>
              </div>
            </div>
            <div className="about-card">
              <div className="about-card-icon" aria-hidden="true">
                <FaServer />
              </div>
              <div className="about-card-text">
                <h3>Backend Development</h3>
                <p>Developing robust server-side solutions with NestJS, Node.js & RESTful APIs</p>
              </div>
            </div>
            <div className="about-card">
              <div className="about-card-icon" aria-hidden="true">
                <FaCode />
              </div>
              <div className="about-card-text">
                <h3>Full Stack Solutions</h3>
                <p>End-to-end development from database design to cloud deployment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
