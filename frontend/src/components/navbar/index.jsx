import React from "react";
import { Link } from "react-router-dom";
import { navlinks } from "./data";
import { connect } from "react-redux";
import { logout } from "../../actions/action.auth";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavbarGreet } from "./navbar.elements";

const myNavbar = ({ logout, isAuthenticated, user }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Link to="/" className="navbar-brand">
          Home
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" style={{ alignItems: "center" }}>
            {isAuthenticated &&
              navlinks.map((item, index) => {
                const { name, route } = item;
                return (
                  <li className="navbar-item" key={index}>
                    <Link to={route} className="nav-link">
                      {name}
                    </Link>
                  </li>
                );
              })}
          </Nav>
          <Nav style={{ alignItems: "center" }}>
            <NavbarGreet>{isAuthenticated && `Hi ${user.name}`}</NavbarGreet>
            {isAuthenticated ? (
              <Link
                to="/login"
                className="nav-link"
                onClick={logout}
                style={{ alignSelf: "center" }}
              >
                <button
                  type="button"
                  className="btn btn-info"
                  style={{ alignSelf: "center" }}
                >
                  Logout
                </button>
              </Link>
            ) : (
              <Link
                to="/login"
                className="nav-link"
                style={{ alignSelf: "center" }}
              >
                <button
                  type="button"
                  className="btn btn-info"
                  style={{ alignSelf: "center" }}
                >
                  Login
                </button>
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

const mapDispatchToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
  };
};

export default connect(mapDispatchToProps, { logout })(myNavbar);
