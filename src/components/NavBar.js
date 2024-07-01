import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Navbar, Nav, OverlayTrigger, Tooltip } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () => {
  const location = useLocation();

  const activeStyle = {
    fontWeight: "bold",
    color: "#007bff",
  };

  const linkStyle = {
    marginRight: "20px",
  };

  const renderTooltip = (text) => <Tooltip>{text}</Tooltip>;

  return (
    <>
      <style type="text/css">
        {`
          .navbar-nav .nav-link {
            margin-right: 20px; /* Aumenta el espacio entre los enlaces */
          }
          .navbar-nav .nav-link:hover {
            color: #0056b3;
          }
        `}
      </style>
      <Navbar style={{ backgroundColor: "#e3f2fd" }} expand="lg">
        <Navbar.Brand>BadBank</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <OverlayTrigger
              placement="bottom"
              overlay={renderTooltip("Go to Home page")}
            >
              <Nav.Link
                as={NavLink}
                to="/home/"
                style={
                  location.pathname === "/home/"
                    ? { ...linkStyle, ...activeStyle }
                    : linkStyle
                }
              >
                Home
              </Nav.Link>
            </OverlayTrigger>
            <OverlayTrigger
              placement="bottom"
              overlay={renderTooltip("Go to Deposit page")}
            >
              <Nav.Link
                as={NavLink}
                to="/deposit/"
                style={
                  location.pathname === "/deposit/"
                    ? { ...linkStyle, ...activeStyle }
                    : linkStyle
                }
              >
                Deposit
              </Nav.Link>
            </OverlayTrigger>
            <OverlayTrigger
              placement="bottom"
              overlay={renderTooltip("Go to Withdraw page")}
            >
              <Nav.Link
                as={NavLink}
                to="/withdraw/"
                style={
                  location.pathname === "/withdraw/"
                    ? { ...linkStyle, ...activeStyle }
                    : linkStyle
                }
              >
                Withdraw
              </Nav.Link>
            </OverlayTrigger>
            <OverlayTrigger
              placement="bottom"
              overlay={renderTooltip("Go to All Data page")}
            >
              <Nav.Link
                as={NavLink}
                to="/all-data/"
                style={
                  location.pathname === "/all-data/"
                    ? { ...linkStyle, ...activeStyle }
                    : linkStyle
                }
              >
                AllData
              </Nav.Link>
            </OverlayTrigger>
          </Nav>
          <Nav>
            <OverlayTrigger
              placement="bottom"
              overlay={renderTooltip("Create a new account")}
            >
              <Nav.Link
                as={NavLink}
                to="/create-account/"
                style={
                  location.pathname === "/create-account/"
                    ? { ...linkStyle, ...activeStyle }
                    : linkStyle
                }
              >
                Create Account
              </Nav.Link>
            </OverlayTrigger>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
