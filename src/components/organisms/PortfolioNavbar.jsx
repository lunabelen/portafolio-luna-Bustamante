import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function PortfolioNavbar() {
  return (
    <Navbar expand="lg" className="portfolio-navbar">
      <Container>
        <Navbar.Brand href="#inicio" className="brand-wrap">
          <span className="brand-title">PORTAFOLIO ♡</span>
          <span className="brand-name">Luna Bustamante</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="portfolio-navbar-nav" />

        <Navbar.Collapse id="portfolio-navbar-nav">
          <Nav className="ms-auto align-items-lg-center">
            <Nav.Link href="#inicio">Inicio</Nav.Link>
            <Nav.Link href="#proyectos">Proyectos</Nav.Link>
            <Nav.Link href="#noticias">Noticias</Nav.Link>
            <Nav.Link href="#sobre-mi">Sobre mí</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
            <Nav.Link href="#contacto" className="nav-talk">Hablemos ↗</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default PortfolioNavbar;
