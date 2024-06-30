import React, { useContext } from "react";
import BankContext from "../context/BankContext";
import { Card, ListGroup } from "react-bootstrap";

function AllData() {
  const { transactions } = useContext(BankContext);

  return (
    <Card>
      <Card.Body>
        <Card.Title>All Data</Card.Title>
        <ListGroup>
          {transactions.map((transaction, index) => (
            <ListGroup.Item key={index}>
              {transaction.type}: ${transaction.amount}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default AllData;
