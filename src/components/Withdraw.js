import React, { useState, useContext } from "react";
import { Card, Form, Button, Alert, Container } from "react-bootstrap";
import BankContext from "../context/BankContext";

function Withdraw() {
  const { balance, withdraw } = useContext(BankContext);
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  const handleWithdraw = () => {
    const numberAmount = parseFloat(amount);
    if (isNaN(numberAmount)) {
      alert("The entered value is not a number.");
      return;
    }
    if (numberAmount < 0) {
      alert("The entered value cannot be negative.");
      return;
    }
    if (numberAmount > balance) {
      alert("Insufficient funds.");
      return;
    }
    withdraw(numberAmount);
    setMessage("Withdrawal successful.");
    setAmount("");
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <Card
        style={{ width: "30rem", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
      >
        <Card.Body>
          <Card.Title>Balance: ${balance.toFixed(2)}</Card.Title>
          {message && <Alert variant="success">{message}</Alert>}
          <Form>
            <Form.Group controlId="formAmount">
              <Form.Label>Withdrawal Amount</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </Form.Group>
            <div className="d-flex justify-content-center">
              <Button
                variant="primary"
                onClick={handleWithdraw}
                disabled={!amount}
                style={{ marginTop: "10px" }}
              >
                Withdraw
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Withdraw;
