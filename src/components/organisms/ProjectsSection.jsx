import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SectionTitle from '../atoms/SectionTitle';
import ProjectCard from '../molecules/ProjectCard';

function ProjectsSection() {
  return (
    <section id="proyectos" className="projects-section">
      <Container>
        <SectionTitle
          subtitle="Aplicando lo aprendido en proyectos reales"
          centered
        >
          Mis proyectos ♡
        </SectionTitle>

        <Row className="g-4">
          <Col lg={4} md={6}>
            <ProjectCard
              image="/images/techstore.png"
              title="Tech Store"
              description="Tienda online de productos tecnológicos con catálogo, carrito de compras y validaciones de usuario."
              technologies={['HTML', 'CSS', 'JavaScript', 'Bootstrap']}
              link="https://github.com/lunabelen/TechStore"
            />
          </Col>

          <Col lg={4} md={6}>
            <ProjectCard
              image="/images/techwomen.png"
              title="TechWomen Match"
              description="Plataforma para conectar y empoderar mujeres en tecnología, comparando habilidades y oportunidades."
              technologies={['PL/SQL', 'Base de Datos', 'Oracle APEX']}
              link="#detalle-techwomen"
            />
          </Col>

          <Col lg={4} md={6}>
            <ProjectCard
              image="/images/saludtotal.png"
              title="SaludTotal"
              description="Aplicación móvil en Kotlin para gestionar boxes de atención, pacientes, tarifas y registros clínicos."
              technologies={['Kotlin', 'POO', 'App móvil']}
              link="#detalle-saludtotal"
            />
          </Col>
        </Row>

        <div id="detalle-techwomen" className="project-detail mt-5">
          <h3>TechWomen Match</h3>
          <p>
            Proyecto desarrollado para trabajar con bases de datos. Permite
            comparar las habilidades de una usuaria con los requisitos de una
            oportunidad y conocer su nivel de compatibilidad.
          </p>
          <p>
            En este proyecto trabajé con PL/SQL, procedimientos, funciones,
            cursores, manejo de excepciones y Oracle APEX.
          </p>
        </div>

        <div id="detalle-saludtotal" className="project-detail mt-4">
          <h3>SaludTotal</h3>
          <p>
            Aplicación desarrollada en Kotlin para administrar boxes de
            atención, pacientes, tarifas y distintos tipos de atención.
          </p>
          <p>
            En este proyecto trabajé programación orientada a objetos,
            clases, herencia, excepciones y manejo de información.
          </p>
        </div>
      </Container>
    </section>
  );
}

export default ProjectsSection;