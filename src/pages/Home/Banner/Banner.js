import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import banner from "../../../images/banner.jpg";
const Banner = () => {
  const bannerBg = {
    background: `url(${banner})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };
  return (
    <div className="py-5" style={bannerBg}>
      <Container>
        <Row className="py-5">
          <Col className="py-5 text-light" xs={12} md={6}>
            <h1 className="mb-3">Find Best Quality CCTVs</h1>
            <h3 className="mb-4">We are providing your next step security</h3>
            <Button className="custom-btn btn-lg px-5 me-3" variant="primary">
              <Link to="/allCctv">Explore</Link>
            </Button>
            <Button className="custom-btn btn-lg px-5 me-3" variant="secondary">
              <a href="#contact-us">Contact Us</a>
            </Button>
          </Col>
          <Col xs={12} md={6}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
