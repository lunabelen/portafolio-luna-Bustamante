import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SectionTitle from '../atoms/SectionTitle';
import ProjectCard from '../molecules/ProjectCard';

function ProjectsSection() {
  return (
    <section id="proyectos" className="projects-section">
      <Container>
        <SectionTitle subtitle="Aplicando lo aprendido en proyectos reales" centered>
          Mis proyectos ♡
        </SectionTitle>

        <Row className="g-4">
          <Col lg={4} md={6}>
            <ProjectCard
              image="/images/techstore.png"
              title="Tech Store"
              description="Tienda online de productos tecnológicos con catálogo, carrito de compras y validaciones de usuario."
              technologies={["HTML", "CSS", "JavaScript", "Bootstrap"]}
            />
          </Col>

          <Col lg={4} md={6}>
            <ProjectCard
              image="/images/techwomen.png"
              title="TechWomen Match"
              description="Plataforma para conectar y empoderar mujeres en tecnología, comparando habilidades y oportunidades."
              technologies={["PL/SQL", "Base de Datos", "Oracle APEX"]}
            />
          </Col>

          <Col lg={4} md={6}>
            <ProjectCard
              image="/images/saludtotal.png"
              title="SaludTotal"
              description="Aplicación móvil en Kotlin para gestionar boxes de atención, pacientes, tarifas y registros clínicos."
              technologies={["Kotlin", "POO", "App móvil"]}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ProjectsSection;
