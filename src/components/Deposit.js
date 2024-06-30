import React, { useState, useContext } from "react";
import { Card, Form, Button, Alert, Container } from "react-bootstrap";
import BankContext from "../context/BankContext";

function Deposit() {
  const { balance, deposit } = useContext(BankContext);
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  const handleDeposit = () => {
    const numberAmount = parseFloat(amount);
    if (isNaN(numberAmount)) {
      alert("El valor introducido no es un número.");
      return;
    }
    if (numberAmount < 0) {
      alert("El valor introducido no puede ser negativo.");
      return;
    }
    deposit(numberAmount);
    setMessage("Depósito realizado con éxito.");
    setAmount("");
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <Card style={{ width: "30rem" }}>
        <Card.Body>
          <Card.Title>Balance: ${balance.toFixed(2)}</Card.Title>
          {message && <Alert variant="success">{message}</Alert>}
          <Form>
            <Form.Group controlId="formAmount">
              <Form.Label>Monto de Depósito</Form.Label>
              <Form.Control
                type="text"
                placeholder="Introduce el monto"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </Form.Group>
            <Button
              variant="primary"
              onClick={handleDeposit}
              disabled={!amount}
            >
              Depositar
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Deposit;
