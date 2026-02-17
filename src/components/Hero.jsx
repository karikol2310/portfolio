import { FaLinkedin, FaEnvelope, FaChevronDown } from 'react-icons/fa';
import './Hero.css';

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-bg">
        <div className="hero-orb hero-orb-1"></div>
        <div className="hero-orb hero-orb-2"></div>
        <div className="hero-orb hero-orb-3"></div>
        <div className="hero-grid"></div>
      </div>

      <div className="container hero-content">
        <div className="hero-text">
          <h1 className="hero-name">
            Hi, I'm <span className="hero-name-highlight">Karikol Raja</span>
          </h1>
          <h2 className="hero-title">Junior Software Developer</h2>
          <p className="hero-description">
            I build modern web applications with clean code and thoughtful user experiences.
            Based in Chennai, India.
          </p>

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

          <div className="hero-tech-stack">
            <span className="hero-tech-label">Tech Stack</span>
            <div className="hero-tech-divider"></div>
            <div className="hero-tech-items">
              <span>React</span>
              <span>Next.js</span>
              <span>TypeScript</span>
              <span>NestJS</span>
              <span>MongoDB</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-card">
            <div className="hero-card-header">
              <div className="hero-card-dots">
                <span></span><span></span><span></span>
              </div>
              <span className="hero-card-title">portfolio.jsx</span>
            </div>
            <div className="hero-card-body">
              <code>
                <span className="code-keyword">const</span> <span className="code-var">developer</span> = {'{'}<br />
                &nbsp;&nbsp;<span className="code-key">name</span>: <span className="code-string">"J. Karikol Raja"</span>,<br />
                &nbsp;&nbsp;<span className="code-key">role</span>: <span className="code-string">"Software Developer"</span>,<br />
                &nbsp;&nbsp;<span className="code-key">skills</span>: [<span className="code-string">"React"</span>, <span className="code-string">"Next.js"</span>, <span className="code-string">"TypeScript"</span>],<br />
                &nbsp;&nbsp;<span className="code-key">passion</span>: <span className="code-string">"Building great apps"</span>,<br />
                {'}'};
              </code>
            </div>
          </div>
        </div>
      </div>

      <a href="#about" className="hero-scroll">
        <FaChevronDown />
      </a>
    </section>
  );
}

export default Hero;
