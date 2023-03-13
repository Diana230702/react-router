import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CardBlog({ item }) {
  return (
    <Card className="m-5" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.series}</Card.Title>
        <Card.Text>{item.descr}</Card.Text>
        <Button variant="primary">Watch</Button>
      </Card.Body>
    </Card>
  );
}

export default CardBlog;
