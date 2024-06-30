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
      setMessage("El campo de nombre no puede estar vacío.");
      return;
    }
    if (!email) {
      setMessage("El campo de correo electrónico no puede estar vacío.");
      return;
    }
    if (!password || password.length < 8) {
      setMessage("La contraseña debe tener al menos 8 caracteres.");
      return;
    }

    addAccount({ name, email, password, balance: 100 });
    setMessage("Cuenta creada exitosamente.");
    setShowForm(false);
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <Card style={{ width: "30rem" }}>
        <Card.Body>
          {message && (
            <Alert
              variant={message.includes("exitosamente") ? "success" : "danger"}
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
                <Button
                  variant="primary"
                  onClick={handleCreateAccount}
                  disabled={!name || !email || !password}
                >
                  Create Account
                </Button>
              </Form>
            </>
          ) : (
            <>
              <Button
                variant="primary"
                onClick={() => {
                  setShowForm(true);
                  setName("");
                  setEmail("");
                  setPassword("");
                  setMessage("");
                }}
              >
                Add another account
              </Button>
            </>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
}

export default CreateAccount;
