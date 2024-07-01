import React from "react";
import { Card, Container } from "react-bootstrap";

function Home() {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <Card
        style={{ width: "30rem", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
        className="text-center"
      >
        <Card.Img
          variant="top"
          src={"/bank.png"}
          className="img-fluid mx-auto mt-3"
          style={{ height: "100px", width: "150px" }}
        />
        <Card.Body>
          <Card.Title>Welcome to the Bank</Card.Title>
          <Card.Text>Thank you for trusting us!</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Home;
