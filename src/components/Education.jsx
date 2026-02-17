import { FaGraduationCap } from 'react-icons/fa';
import './Education.css';

function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Education</span>
          <h2 className="section-title">Academic Background</h2>
          <p className="section-subtitle">My educational journey</p>
        </div>

        <div className="education-card card">
          <div className="education-accent"></div>
          <div className="education-icon">
            <FaGraduationCap />
          </div>
          <div className="education-details">
            <h3 className="education-degree">Master of Computer Applications (MCA)</h3>
            <p className="education-school">Ayya Nadar Janaki Ammal College</p>
            <p className="education-specialization">Specialization: Web Design</p>
            <span className="education-period">2021 - 2023</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
