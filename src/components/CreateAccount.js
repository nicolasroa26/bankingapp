import React, { useState, useContext } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";
import { UserContext } from "../context/UserContext";

function CreateAccount() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showForm, setShowForm] = useState(true);
  const ctx = useContext(UserContext);

  const handleCreateAccount = () => {
    if (!name) {
      setMessage("El campo de nombre no puede estar vacío.");
      return;
    }
    if (!email) {
      setMessage("El campo de correo electrónico no puede estar vacío.");
      return;
    }
    if (password.length < 8) {
      setMessage("La contraseña debe tener al menos 8 caracteres.");
      return;
    }
    ctx.users.push({ name, email, password, balance: 100 });
    setMessage("Cuenta creada exitosamente.");
    setShowForm(false);
  };

  return (
    <Card style={{ width: "18rem" }}>
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
                disabled={!name && !email && !password}
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
  );
}

export default CreateAccount;
