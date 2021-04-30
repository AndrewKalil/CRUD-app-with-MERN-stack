import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signup } from "../../actions/action.auth";
import "./style.css";
import { Button, Form } from "react-bootstrap";

const Signup = ({ signup, isAuthenticated }) => {
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    signup(name, email, password);

    setSignupData({
      name: "",
      email: "",
      password: "",
    });
  };

  const onChange = (e) => {
    let key = e.target.name;
    let value = e.target.value;

    setSignupData({ ...signupData, [key]: value });
  };

  const { name, email, password } = signupData;

  return (
    <div className="center-div" id="signup">
      <div className="container border myForm py-5">
        <div
          className="title pd-5"
          style={{ textAlign: "center", marginBottom: "30px" }}
        >
          <h2 className="font-weight-bold">SIGN UP</h2>
          <span>Log in to existing account</span>
        </div>
        <Form onSubmit={(e) => onSubmit(e)}>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              onChange={(e) => {
                onChange(e);
              }}
              autoComplete="on"
              name="name"
            />
          </Form.Group>

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
            Already have an account? <Link to="/login">Login</Link>
          </Form.Text>
        </Form>
      </div>
    </div>
  );
};

const mapDispatchToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
};

export default connect(mapDispatchToProps, { signup })(Signup);
