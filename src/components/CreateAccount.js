import React, { useState, useContext } from "react";
import { Card, Form, Button, Alert, Container } from "react-bootstrap";
import BankContext from "../context/BankContext";

function CreateAccount() {
  const { addAccount } = useContext(BankContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showForm, setShowForm] = useState(true);

  const handleCreateAccount = () => {
    if (!name) {
      setMessage("The name field cannot be empty.");
      return;
    }
    if (!email) {
      setMessage("The email field cannot be empty.");
      return;
    }
    if (!password || password.length < 8) {
      setMessage("The password must be at least 8 characters long.");
      return;
    }

    addAccount({ name, email, password, balance: 100 });
    setMessage("Account successfully created.");
    setShowForm(false);
  };

  const isFormValid = () => {
    return name && email && password.length >= 8;
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
          {message && (
            <Alert
              variant={message.includes("successfully") ? "success" : "danger"}
            >
              {message}
            </Alert>
          )}
          {showForm ? (
            <>
              <Form>
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <div className="d-flex justify-content-center">
                  <Button
                    variant="primary"
                    onClick={handleCreateAccount}
                    disabled={!isFormValid()}
                    style={{ marginTop: "10px" }}
                  >
                    Create Account
                  </Button>
                </div>
              </Form>
            </>
          ) : (
            <>
              <div className="d-flex justify-content-center">
                <Button
                  variant="primary"
                  onClick={() => {
                    setShowForm(true);
                    setName("");
                    setEmail("");
                    setPassword("");
                    setMessage("");
                  }}
                  style={{ marginTop: "10px" }}
                >
                  Add another account
                </Button>
              </div>
            </>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
}

export default CreateAccount;
