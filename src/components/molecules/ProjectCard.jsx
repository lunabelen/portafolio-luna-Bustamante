import Card from 'react-bootstrap/Card';
import PortfolioButton from '../atoms/PortfolioButton';

function ProjectCard({
  image,
  title,
  description,
  technologies,
  link = '#contacto'
}) {
  const techList = Array.isArray(technologies)
    ? technologies
    : technologies.split('·').map((item) => item.trim()).filter(Boolean);

  return (
    <Card className="project-card h-100">
      <div className="project-image-wrap">
        <Card.Img
          variant="top"
          src={image}
          alt={`Vista del proyecto ${title}`}
        />
      </div>

      <Card.Body className="d-flex flex-column">
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>

        <div className="project-tech-list" aria-label={`Tecnologías utilizadas en ${title}`}>
          {techList.map((tech) => (
            <span key={tech} className="tech-chip">{tech}</span>
          ))}
        </div>

        <div className="mt-auto pt-3">
          <PortfolioButton href={link} className="project-link-button">
            Ver proyecto <span aria-hidden="true">→</span>
          </PortfolioButton>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
