import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../actions/action.auth";
import "./style.css";
import { Button, Form } from "react-bootstrap";

const Login = ({ login, isAuthenticated, message }) => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  const onChange = (e) => {
    let key = e.target.name;
    let value = e.target.value;

    setLoginData({ ...loginData, [key]: value });
  };

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  const { email, password } = loginData;

  return (
    <div className="center-div" id="login">
      <div className="container border myForm py-5">
        <div
          className="title pd-5"
          style={{ textAlign: "center", marginBottom: "30px" }}
        >
          <h2 className="font-weight-bold">LOGIN</h2>
          <span>Log in to existing account</span>
        </div>
        <Form onSubmit={(e) => onSubmit(e)}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => {
                onChange(e);
              }}
              autoComplete="on"
              name="email"
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              className="form-control"
              onChange={(e) => {
                onChange(e);
              }}
              name="password"
              placeholder="Password"
            />
          </Form.Group>
          <div className="button-container">
            <Button
              variant="primary"
              type="submit"
              className="btn btn-success rounded-pill"
            >
              Submit
            </Button>
          </div>
          <Form.Text style={{ textAlign: "center" }}>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </Form.Text>
        </Form>
      </div>
    </div>
  );
};

const mapDispatchToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    message: state.auth.message,
  };
};
// connect(null, { login })
export default connect(mapDispatchToProps, { login })(Login);
