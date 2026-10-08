import Container from 'react-bootstrap/Container';

const skills = [
  { icon: '⚛', name: 'React', tone: 'blue' },
  { icon: 'JS', name: 'JavaScript', tone: 'yellow' },
  { icon: '5', name: 'HTML', tone: 'orange' },
  { icon: '3', name: 'CSS', tone: 'blue' },
  { icon: 'B', name: 'Bootstrap', tone: 'purple' },
  { icon: 'K', name: 'Kotlin', tone: 'gradient' },
  { icon: '◫', name: 'PL/SQL', tone: 'violet' },
  { icon: 'O', name: 'Oracle APEX', tone: 'red' }
];

function SkillsSection() {
  return (
    <section className="skills-section" aria-labelledby="skills-title">
      <Container>
        <div className="skills-heading">
          <span aria-hidden="true">✦</span>
          <h2 id="skills-title">Mis habilidades ♡</h2>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill.name}>
              <div className={`skill-icon skill-${skill.tone}`}>{skill.icon}</div>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default SkillsSection;
