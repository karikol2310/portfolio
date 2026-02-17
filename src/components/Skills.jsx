import {
  FaJava,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaDocker,
  FaAws,
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
  { name: 'Java', icon: <FaJava />, level: 85 },
  { name: 'Next.js', icon: <SiNextdotjs />, level: 80 },
  { name: 'React', icon: <FaReact />, level: 80 },
  { name: 'TypeScript', icon: <SiTypescript />, level: 75 },
  { name: 'JavaScript', icon: <SiJavascript />, level: 85 },
  { name: 'Node.js', icon: <FaNodeJs />, level: 75 },
  { name: 'NestJS', icon: <SiNestjs />, level: 70 },
  { name: 'MongoDB', icon: <SiMongodb />, level: 75 },
  { name: 'HTML5', icon: <FaHtml5 />, level: 90 },
  { name: 'CSS3', icon: <FaCss3Alt />, level: 85 },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 75 },
  { name: 'Git', icon: <FaGitAlt />, level: 80 },
];

function Skills() {
  return (
    <section id="skills" className="section" style={{ background: 'var(--bg-section)' }}>
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="section-subtitle">Technologies I work with</p>

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
