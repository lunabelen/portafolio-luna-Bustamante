import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PortfolioButton from '../atoms/PortfolioButton';

function HeroSection() {
  return (
    <section id="inicio" className="hero-section">
      <Container>
        <Row className="align-items-center hero-row">
          <Col lg={6} className="hero-copy">
            <div className="hero-eyebrow">
              DESARROLLO WEB · TECNOLOGÍA · SOLUCIONES ♡
            </div>

            <h1 className="hero-title">PORTAFOLIO</h1>

            <p className="hero-signature">
              Luna Bustamante ♡
            </p>

            <p className="hero-role">
              Estudiante de Ingeniería en Informática
            </p>

            <p className="hero-description">
              Me apasiona la tecnología y el desarrollo web, y creo en el poder de las
              soluciones digitales para generar un impacto positivo. Aquí comparto mis
              proyectos, aprendizajes y todo lo que me motiva en este camino.
            </p>

            <div className="hero-actions d-flex flex-wrap gap-3">
              <PortfolioButton
                href="#proyectos"
                className="hero-primary-btn"
              >
                Ver mis proyectos <span aria-hidden="true">→</span>
              </PortfolioButton>

              <PortfolioButton
                href="#sobre-mi"
                variant="outline-primary"
                className="hero-secondary-btn"
              >
                Conóceme ♡
              </PortfolioButton>
            </div>

            <div className="hero-mini-notes" aria-hidden="true">
              <span>IDEAS</span>
              <span>CÓDIGO</span>
              <span>UN FUTURO MÁS HUMANO</span>
            </div>
          </Col>

          <Col lg={6} className="hero-art-col">
            <div className="hero-art-card">
              <div className="hero-blob hero-blob-one"></div>
              <div className="hero-blob hero-blob-two"></div>

              <div className="hero-doodle hero-heart">♡</div>
              <div className="hero-doodle hero-lines">≋</div>

              <img
                src="images/hero-luna.png"
                alt="Ilustración de Luna Bustamante trabajando frente a su computador"
                className="hero-illustration"
              />

              <div className="hero-sticky-note">
                DISCIPLINA
                <br />
                IDEAS
                <br />
                SOLUCIONES
                <br />
                PERSONAS ♡
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HeroSection;