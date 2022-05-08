import React, { useState } from "react";
import {
  Alert,
  Button,
  Col,
  Form,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";

const MakeAdmin = () => {
  const [adminEmail, setAdminEmail] = useState({});
  const [gotAdmin, setGotAdmin] = useState(false);
  const [alreadyAdmin, setAlreadyAdmin] = useState(false);
  const [adminError, setAdminError] = useState(false);

  const getInputFieldValue = (e) => {
    setAdminEmail(e.target.value);
  };

  const handleMakeAdmin = (e) => {
    const user = { adminEmail };
    fetch("https://obscure-crag-25487.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount === 1 && data.matchedCount === 1) {
          setGotAdmin(true);
        } else if (data.modifiedCount === 0 && data.matchedCount === 1) {
          setAlreadyAdmin(true);
        } else {
          setAdminError(true);
        }
      });
    e.preventDefault();
  };
  return (
    <div>
      <h4 className="mb-3">Make Admin</h4>
      <Form onSubmit={handleMakeAdmin}>
        <Row>
          <Col sx="auto">
            <h6 className="mb-4">
              Please Note: Only register customer/user can be admin if you
              allow.
            </h6>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col xs="auto">
            <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
              Registered User/Customer Email
            </Form.Label>
            <InputGroup className="mb-2">
              <InputGroup.Text>@</InputGroup.Text>
              <FormControl
                onBlur={getInputFieldValue}
                name="email"
                type="email"
                placeholder="Email Address"
              />
            </InputGroup>
          </Col>
          <Col xs="auto">
            <Button type="submit" className="mb-2">
              Make Admin
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            {gotAdmin ? (
              <Alert className="my-3" variant="success">
                Admin created successfully.
              </Alert>
            ) : (
              alreadyAdmin && (
                <Alert className="my-3" variant="danger">
                  This user has already admin role.
                </Alert>
              )
            )}
            {adminError && (
              <Alert className="my-3" variant="danger">
                Sorry ! This is not a registered user/customer email.
              </Alert>
            )}
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default MakeAdmin;
