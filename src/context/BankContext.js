import React, { createContext, useState } from "react";

const BankContext = createContext();

export const BankProvider = ({ children }) => {
  const [accounts, setAccounts] = useState([]);
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);

  const addAccount = (account) => {
    setAccounts([...accounts, account]);
  };

  const deposit = (amount) => {
    setBalance(balance + amount);
    setTransactions([...transactions, { type: "deposit", amount }]);
  };

  const withdraw = (amount) => {
    if (amount <= balance) {
      setBalance(balance - amount);
      setTransactions([...transactions, { type: "withdraw", amount }]);
    } else {
      alert("Fondos insuficientes.");
    }
  };

  return (
    <BankContext.Provider
      value={{
        accounts,
        addAccount,
        balance,
        deposit,
        withdraw,
        transactions,
      }}
    >
      {children}
    </BankContext.Provider>
  );
};

export default BankContext;
