import { FaBriefcase } from 'react-icons/fa';
import './Experience.css';

const experiences = [
  {
    company: 'Skillmine Technology Consulting',
    role: 'Junior Software Developer',
    period: 'June 2023 - Present',
    duration: '2+ years',
    location: 'Sivakasi, Tamil Nadu, India',
    highlights: [
      'Developing and maintaining enterprise-grade web applications',
      'Working with modern tech stack including TypeScript, NestJS, and MongoDB',
      'Collaborating with cross-functional teams for SDK and microservice development',
      'Building RESTful APIs and integrating third-party services',
    ],
  },
  {
    company: 'Cooldreamers',
    role: 'Internship Trainee',
    period: 'Dec 2022 - May 2023',
    duration: '6 months',
    location: 'Sivakasi, Tamil Nadu, India',
    highlights: [
      'Gained hands-on experience in software development practices',
      'Learned industry-standard tools and development workflows',
      'Contributed to real-world projects during the internship period',
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Career</span>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">My professional journey so far</p>
        </div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot">
                <FaBriefcase />
              </div>
              <div className="timeline-content card">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-role">{exp.role}</h3>
                    <p className="timeline-company">{exp.company}</p>
                  </div>
                  <div className="timeline-meta">
                    <span className="timeline-period">{exp.period}</span>
                    <span className="timeline-duration">{exp.duration}</span>
                  </div>
                </div>
                <p className="timeline-location">{exp.location}</p>
                <ul className="timeline-highlights">
                  {exp.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
