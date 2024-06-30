import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([
    { name: "Usuario1", email: "usuario1@correo.com", balance: 100 },
    { name: "Usuario2", email: "usuario2@correo.com", balance: 200 },
  ]);

  const addUser = (user) => {
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  return (
    <UserContext.Provider value={{ users, addUser }}>
      {children}
    </UserContext.Provider>
  );
};
