import { FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="footer-logo">{'<KR />'}</span>
            <p>Building digital experiences with passion and precision.</p>
          </div>

          <div className="footer-links">
            <a
              href="https://www.linkedin.com/in/j-karikol-raja-018292219"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a href="mailto:karikolraja.j@anjaconline.org" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} J. Karikol Raja. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
