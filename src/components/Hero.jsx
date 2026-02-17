import { FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';
import './Hero.css';

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-name">J. Karikol Raja</h1>
          <h2 className="hero-title">Junior Software Developer</h2>
          <p className="hero-location">Chennai, Tamil Nadu, India</p>

          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">
              <FaEnvelope /> Get in Touch
            </a>
            <a
              href="https://www.linkedin.com/in/j-karikol-raja-018292219"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-avatar">
            <span>JKR</span>
          </div>
          <div className="hero-decoration"></div>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}

export default Hero;
