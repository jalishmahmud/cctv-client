import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const NotFound = () => {
  return (
    <Container>
      <Row className="my-5 rounded border p-5">
        <Col className="d-flex justify-content-center">
          <h2>Opps! 404 not found</h2>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
