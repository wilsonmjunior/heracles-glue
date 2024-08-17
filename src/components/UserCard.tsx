import { Card } from "./Card";

export function UserCard() {
  return (
    <Card>
      <Card.Header>
        <Card.Image uri="" />
        <Card.Title>Titulo</Card.Title>
      </Card.Header>

      <Card.Body>
        <Card.Text>Texto de teste</Card.Text>
      </Card.Body>
    </Card>
  );
}

// compound components pattern
