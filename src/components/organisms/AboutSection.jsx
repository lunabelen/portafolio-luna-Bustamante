import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AboutSection() {
  const values = [
    ['⌂', 'Aprender'],
    ['✦', 'Crear'],
    ['↗', 'Resolver'],
    ['♡', 'Impactar']
  ];

  return (
    <section id="sobre-mi" className="about-section">
      <Container>
        <Row className="align-items-center g-4">
          <Col lg={4}>
            <div className="about-portrait-wrap">
              <img
                src="/images/about-luna.png"
                alt="Ilustración de Luna Bustamante"
                className="about-portrait"
              />
              <span className="about-lightbulb" aria-hidden="true">💡</span>
              <span className="about-heart" aria-hidden="true">♡</span>
            </div>
          </Col>

          <Col lg={5}>
            <div className="about-copy">
              <h2>Sobre mí <span aria-hidden="true">—</span></h2>
              <p>
                Soy estudiante de Ingeniería en Informática. Me interesa seguir
                aprendiendo, desarrollar soluciones digitales y aportar con tecnología
                a un mundo más humano.
              </p>

              <div className="about-values">
                {values.map(([icon, label]) => (
                  <div className="about-value" key={label}>
                    <span className="about-value-icon" aria-hidden="true">{icon}</span>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </Col>

          <Col lg={3}>
            <div className="about-note">
              <span className="note-clip" aria-hidden="true">⌇</span>
              LA TECNOLOGÍA<br />TAMBIÉN<br />PUEDE HACER<br />UN MUNDO<br />MÁS HUMANO ♡
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AboutSection;
