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
  { name: 'JavaScript', icon: <SiJavascript />, level: 85 },
  { name: 'TypeScript', icon: <SiTypescript />, level: 75 },
  { name: 'React', icon: <FaReact />, level: 80 },
  { name: 'Next.js', icon: <SiNextdotjs />, level: 80 },
  { name: 'Node.js', icon: <FaNodeJs />, level: 75 },
  { name: 'NestJS', icon: <SiNestjs />, level: 70 },
  { name: 'MongoDB', icon: <SiMongodb />, level: 75 },
  { name: 'HTML5', icon: <FaHtml5 />, level: 90 },
  { name: 'CSS3', icon: <FaCss3Alt />, level: 85 },
  { name: 'Tailwind', icon: <SiTailwindcss />, level: 75 },
  { name: 'Git', icon: <FaGitAlt />, level: 80 },
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
              <div className="skill-bar">
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
