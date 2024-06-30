import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import CreateAccount from "./components/CreateAccount";
import Deposit from "./components/Deposit";
import Withdraw from "./components/Withdraw";
import Balance from "./components/Balance";
import AllData from "./components/AllData";
import { UserProvider } from "./context/UserContext";

const AppLayout = () => {
  return (
    <UserProvider>
      <NavBar />
      <Outlet />
    </UserProvider>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/create-account",
        element: <CreateAccount />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/deposit",
        element: <Deposit />,
      },
      {
        path: "/withdraw",
        element: <Withdraw />,
      },
      {
        path: "/balance",
        element: <Balance />,
      },
      {
        path: "/all-data",
        element: <AllData />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
