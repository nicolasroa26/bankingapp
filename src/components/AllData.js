import React, { useContext } from "react";
import BankContext from "../context/BankContext";
import { Card, ListGroup, Container } from "react-bootstrap";

function AllData() {
  const { accounts, transactions } = useContext(BankContext);

  return (
    <Container className="my-4">
      <Card className="mb-4">
        <Card.Body>
          <Card.Title>All Accounts</Card.Title>
          <ListGroup>
            {accounts.map((account, index) => (
              <ListGroup.Item key={index}>
                <strong>Name:</strong> {account.name}
                <br />
                <strong>Email:</strong> {account.email}
                <br />
                <strong>Balance:</strong> ${account.balance.toFixed(2)}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>All Transactions</Card.Title>
          <ListGroup>
            {transactions.map((transaction, index) => (
              <ListGroup.Item key={index}>
                <strong>{transaction.type}:</strong> ${transaction.amount}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default AllData;
