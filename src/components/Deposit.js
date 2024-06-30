import React, { useState } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";

function Deposit() {
  const [amount, setAmount] = useState("");
  const [balance, setBalance] = useState(0);
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
    setBalance(balance + numberAmount);
    setMessage("Depósito realizado con éxito.");
    setAmount("");
  };

  return (
    <Card style={{ width: "18rem" }}>
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
          <Button variant="primary" onClick={handleDeposit} disabled={!amount}>
            Depositar
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default Deposit;
