import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import PortfolioButton from '../atoms/PortfolioButton';

function ContactSection() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setEnviado(true);
  };

  return (
    <section id="contacto" className="contact-section">
      <Container>
        <Row className="align-items-center g-4">
          <Col lg={4}>
            <div className="contact-intro">
              <div className="contact-icon" aria-hidden="true">✉</div>

              <h2>Contacto ♡</h2>

              <p>
                ¿Tienes una idea, proyecto o quieres conversar?
                ¡Escríbeme! Me encantaría conocerte.
              </p>
            </div>
          </Col>

          <Col lg={8}>
            <Form className="contact-form" onSubmit={handleSubmit}>
              <Row className="g-3 align-items-end">
                <Col md={9}>

                  <Form.Group className="mb-2" controlId="nombre">
                    <Form.Label className="visually-hidden">
                      Nombre
                    </Form.Label>

                    <Form.Control
                      type="text"
                      value={nombre}
                      onChange={(event) => setNombre(event.target.value)}
                      placeholder="Nombre"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-2" controlId="email">
                    <Form.Label className="visually-hidden">
                      Correo
                    </Form.Label>

                    <Form.Control
                      type="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      placeholder="Correo"
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="mensaje">
                    <Form.Label className="visually-hidden">
                      Mensaje
                    </Form.Label>

                    <Form.Control
                      as="textarea"
                      rows={3}
                      value={mensaje}
                      onChange={(event) => setMensaje(event.target.value)}
                      placeholder="Mensaje"
                      required
                    />
                  </Form.Group>

                </Col>

                <Col md={3}>
                  <PortfolioButton
                    type="submit"
                    className="contact-submit-external"
                  >
                    Enviar mensaje ↗
                  </PortfolioButton>
                </Col>
              </Row>

              {enviado && (
                <p className="form-success" role="status">
                  ¡Gracias! Tu mensaje fue registrado.
                </p>
              )}
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ContactSection;