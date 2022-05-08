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
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const [logInInfo, setLogInInfo] = useState({});
  const { user, loginUser, isLoading, authError, googleLogIn } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const getInputFieldValue = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLogInInfo = { ...logInInfo };
    newLogInInfo[field] = value;
    setLogInInfo(newLogInInfo);
  };
  const handleUserLgoIn = (e) => {
    loginUser(logInInfo.email, logInInfo.password, location, history);

    e.preventDefault();
  };
  const handleGoogleLogIn = () => {
    googleLogIn(location, history);
  };
  return (
    <div>
      <Container>
        <Row className="mt-5 d-flex justify-content-center">
          <Col md={5} xs={10} className=" p-5 rounded shadow">
            <h2 className="mb-3">Login {user?.email && user.email}</h2>
            <Form onSubmit={handleUserLgoIn}>
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
                Login
              </Button>
              {isLoading && <Spinner animation="border" variant="primary" />}
              <span className="ms-2">
                <Link to="/register">New user? Please Register</Link>
              </span>
            </Form>
            <div className="my-3">OR</div>
            <Button onClick={handleGoogleLogIn} variant="danger" type="submit">
              Login With Google
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
