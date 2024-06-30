import React from "react";
import { Card, Container } from "react-bootstrap";

function Home() {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <Card style={{ width: "30rem" }} className="text-center">
        <Card.Img
          variant="top"
          src={"/bank.png"}
          className="img-fluid mx-auto"
          style={{ height: "100px", width: "150px" }}
        />
        <Card.Body>
          <Card.Title>Bienvenido al Banco</Card.Title>
          <Card.Text>¡Gracias por confiar en nosotros!</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Home;
