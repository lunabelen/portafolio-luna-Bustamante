import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NewsCard from '../molecules/NewsCard';
import noticiasData from '../../data/noticias.json';

function NewsSection() {
  const [noticias] = useState(noticiasData);

  return (
    <section id="noticias" className="news-section">
      <Container>
        <div className="news-heading d-flex flex-wrap justify-content-between align-items-end gap-3">
          <div>
            <p className="news-kicker">▣</p>
            <h2>Noticias ♡</h2>
            <p>Novedades, aprendizajes y temas que me interesan</p>
          </div>
          <a className="news-all-link" href="#noticias">Ver todas las noticias →</a>
        </div>

        <Row className="g-3">
          {noticias.map((noticia) => (
            <Col lg={4} md={6} key={noticia.id}>
              <NewsCard
                title={noticia.title}
                date={noticia.date}
                content={noticia.content}
                image={noticia.image}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default NewsSection;
