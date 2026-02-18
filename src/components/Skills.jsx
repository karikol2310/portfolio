import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiMongodb,
  SiNestjs,
  SiTailwindcss,
} from 'react-icons/si';
import './Skills.css';

const skills = [
  { name: 'JavaScript', icon: <SiJavascript aria-hidden="true" />, level: 85 },
  { name: 'TypeScript', icon: <SiTypescript aria-hidden="true" />, level: 75 },
  { name: 'React', icon: <FaReact aria-hidden="true" />, level: 80 },
  { name: 'Next.js', icon: <SiNextdotjs aria-hidden="true" />, level: 80 },
  { name: 'Node.js', icon: <FaNodeJs aria-hidden="true" />, level: 75 },
  { name: 'NestJS', icon: <SiNestjs aria-hidden="true" />, level: 70 },
  { name: 'MongoDB', icon: <SiMongodb aria-hidden="true" />, level: 75 },
  { name: 'HTML5', icon: <FaHtml5 aria-hidden="true" />, level: 90 },
  { name: 'CSS3', icon: <FaCss3Alt aria-hidden="true" />, level: 85 },
  { name: 'Tailwind', icon: <SiTailwindcss aria-hidden="true" />, level: 75 },
  { name: 'Git', icon: <FaGitAlt aria-hidden="true" />, level: 80 },
];

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Skills</span>
          <h2 className="section-title">Tech Stack</h2>
          <p className="section-subtitle">Technologies I work with daily</p>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill.name} className="skill-card card">
              <div className="skill-icon">{skill.icon}</div>
              <h3 className="skill-name">{skill.name}</h3>
              <div
                className="skill-bar"
                role="progressbar"
                aria-valuenow={skill.level}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`${skill.name} proficiency`}
              >
                <div
                  className="skill-bar-fill"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span className="skill-level">{skill.level}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
