import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import { UserContext } from "../context/UserContext";

function AllData() {
  const { users } = useContext(UserContext);

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>Todos los Datos</Card.Title>
        {users.map((user, index) => (
          <div key={index}>
            <p>Nombre: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Balance: ${user.balance.toFixed(2)}</p>
            <hr />
          </div>
        ))}
      </Card.Body>
    </Card>
  );
}

export default AllData;
