import { FaEnvelope, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Feel free to reach out</p>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-item-icon">
                <FaEnvelope />
              </div>
              <div>
                <h3>Email</h3>
                <a href="mailto:karikolraja.j@anjaconline.org">karikolraja.j@anjaconline.org</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item-icon">
                <FaLinkedin />
              </div>
              <div>
                <h3>LinkedIn</h3>
                <a
                  href="https://www.linkedin.com/in/j-karikol-raja-018292219"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  j-karikol-raja-018292219
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item-icon">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h3>Location</h3>
                <p>Chennai, Tamil Nadu, India</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Your name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Your email" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" placeholder="Subject" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5" placeholder="Your message..."></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              <FaEnvelope /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
