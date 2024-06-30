import React from "react";
import { Card } from "react-bootstrap";

function Home() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="../assets/bank.png" />
      <Card.Body>
        <Card.Title>Bienvenido al Banco</Card.Title>
        <Card.Text>¡Gracias por confiar en nosotros!</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Home;
