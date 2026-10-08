import Card from 'react-bootstrap/Card';

function NewsCard({ title, date, content, image }) {
  return (
    <Card className="news-card h-100">
      <div className="news-card-layout">
        {image && (
          <img className="news-image" src={image} alt="" aria-hidden="true" />
        )}

        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <p className="news-date">{date}</p>
          <Card.Text>{content}</Card.Text>
        </Card.Body>
      </div>
    </Card>
  );
}

export default NewsCard;
