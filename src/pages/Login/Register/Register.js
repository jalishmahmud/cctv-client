import React, { useState } from "react";
import {
  Alert,
  Button,
  Col,
  Container,
  Form,
  Row,
  Spinner,
} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Register = () => {
  const [registerInfo, setRegisterInfo] = useState({});
  const { registerUser, isLoading, authError } = useAuth();

  const history = useHistory();

  const getInputFieldValue = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLogInInfo = { ...registerInfo };
    newLogInInfo[field] = value;
    setRegisterInfo(newLogInInfo);
  };
  const handleUserRegistration = (e) => {
    registerUser(
      registerInfo.email,
      registerInfo.password,
      registerInfo.name,
      history
    );
    e.preventDefault();
  };
  return (
    <div>
      <Container>
        <Row className="mt-5 d-flex justify-content-center">
          <Col md={5} xs={10} className=" p-5 rounded shadow">
            <h2 className="mb-3">Register</h2>
            <Form onSubmit={handleUserRegistration}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  name="name"
                  onBlur={getInputFieldValue}
                  type="text"
                  placeholder="Enter your name"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  name="email"
                  onBlur={getInputFieldValue}
                  type="email"
                  placeholder="Enter your email"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name="password"
                  onBlur={getInputFieldValue}
                  type="password"
                  placeholder="Your password"
                />
              </Form.Group>
              {authError && (
                <Alert className="my-3" variant="danger">
                  {authError}
                </Alert>
              )}
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember" />
              </Form.Group>

              <Button className="me-2" variant="primary" type="submit">
                Register
              </Button>
              {isLoading && <Spinner animation="border" variant="primary" />}
              <span className="ms-2">
                <Link to="/login">Already Registered? Please Login</Link>
              </span>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
