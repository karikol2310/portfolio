import { FaCode, FaServer, FaLaptopCode } from 'react-icons/fa';
import './About.css';

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Get to know me better</p>

        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate <strong>Junior Software Developer</strong> based in Chennai, India,
              currently working at <strong>Skillmine Technology Consulting</strong>. With a Master's
              degree in Computer Applications (MCA) and hands-on experience in building modern web
              applications, I bring a strong foundation in both frontend and backend development.
            </p>
            <p>
              My expertise spans across Java, Next.js, and OAuth, and I'm always eager to learn new
              technologies and contribute to impactful projects. I believe in writing clean, efficient
              code and building solutions that make a real difference.
            </p>
          </div>

          <div className="about-cards">
            <div className="about-card">
              <FaLaptopCode className="about-card-icon" />
              <h3>Frontend</h3>
              <p>Building responsive and interactive user interfaces with modern frameworks</p>
            </div>
            <div className="about-card">
              <FaServer className="about-card-icon" />
              <h3>Backend</h3>
              <p>Developing robust server-side solutions and RESTful APIs</p>
            </div>
            <div className="about-card">
              <FaCode className="about-card-icon" />
              <h3>Full Stack</h3>
              <p>End-to-end development from database to deployment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
