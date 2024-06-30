/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () => {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand">BadBank</a>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li
            className={`nav-item ${
              location.pathname === "/home/" ? "active" : ""
            }`}
          >
            <NavLink className="nav-link" to="/home/">
              Home
            </NavLink>
          </li>
          <li
            className={`nav-item ${
              location.pathname === "/deposit/" ? "active" : ""
            }`}
          >
            <NavLink className="nav-link" to="/deposit/">
              Deposit
            </NavLink>
          </li>
          <li
            className={`nav-item ${
              location.pathname === "/withdraw/" ? "active" : ""
            }`}
          >
            <NavLink className="nav-link" to="/withdraw/">
              Withdraw
            </NavLink>
          </li>
          <li
            className={`nav-item ${
              location.pathname === "/all-data/" ? "active" : ""
            }`}
          >
            <NavLink className="nav-link" to="/all-data/">
              AllData
            </NavLink>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li
            className={`nav-item ${
              location.pathname === "/create-account/" ? "active" : ""
            }`}
          >
            <NavLink className="nav-link" to="/create-account/">
              Create Account
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
