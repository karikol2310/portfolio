import { useRef } from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Education.css';

function Education() {
  const sectionRef = useRef(null);
  const isVisible = useScrollReveal(sectionRef);

  return (
    <section id="education" className="section" ref={sectionRef}>
      <div className="container">
        <div className={`section-header reveal${isVisible ? ' visible' : ''}`}>
          <span className="section-tag">Education</span>
          <h2 className="section-title">Academic Background</h2>
          <p className="section-subtitle">My educational journey</p>
        </div>

        <div className={`education-card card reveal reveal-delay-1${isVisible ? ' visible' : ''}`}>
          <div className="education-accent"></div>
          <div className="education-icon" aria-hidden="true">
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
