import { FaEnvelope, FaLinkedin, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Contact</span>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Have a project in mind? Let's talk about it</p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <h3 className="contact-info-title">Let's connect</h3>
            <p className="contact-info-text">
              I'm always open to discussing new opportunities, projects, or just having a chat about technology.
            </p>

            <div className="contact-items">
              <a href="mailto:karikolraja03@gmail.com" className="contact-item">
                <div className="contact-item-icon">
                  <FaEnvelope />
                </div>
                <div>
                  <span className="contact-item-label">Email</span>
                  <span className="contact-item-value">karikolraja03@gmail.com</span>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/j-karikol-raja-018292219"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >
                <div className="contact-item-icon">
                  <FaLinkedin />
                </div>
                <div>
                  <span className="contact-item-label">LinkedIn</span>
                  <span className="contact-item-value">j-karikol-raja</span>
                </div>
              </a>

              <div className="contact-item">
                <div className="contact-item-icon">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <span className="contact-item-label">Location</span>
                  <span className="contact-item-value">Chennai, Tamil Nadu, India</span>
                </div>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="John Doe" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="john@example.com" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" placeholder="Project inquiry" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5" placeholder="Tell me about your project..."></textarea>
            </div>
            <button type="submit" className="btn btn-primary contact-submit">
              <FaPaperPlane /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
