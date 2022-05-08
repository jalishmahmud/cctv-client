import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.png";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row className="footer-content pt-3">
          <Col className="py-4" xs={12} md={3}>
            <h4>About Security Camera</h4>
            <img className="mb-3" src={logo} alt="" />
            <p>
              Encounter the most bewitching wines around the world with a
              knowledgeable wine sommelier to experience the sublime with just a
              sip. Relish from the most
            </p>
          </Col>

          <Col className="py-4" xs={12} md={3}>
            <h4>Popular Camera</h4>
            <span>Wireless CCTV System 2M</span>
            <span>Outdoor waterproof CCTV</span>
            <span>Night vision CCTV Camera</span>
            <span>Wireless CCTV Camera</span>
            <span>3MP Wireless IP Camera</span>
          </Col>
          <Col className="py-4" xs={12} md={3}>
            <h4>Customer Service</h4>
            <ul>
              <li>
                <Link to="/">About Us</Link>
              </li>
              <li>
                <Link to="/">Careers</Link>
              </li>
              <li>
                <Link to="/">Help And FAQs</Link>
              </li>
              <li>
                <Link to="/">Popular Items</Link>
              </li>
              <li>
                <Link to="/">Corporate Support</Link>
              </li>
              <li>
                <Link to="/">Privacy Policy</Link>
              </li>
            </ul>
          </Col>
          <Col className="py-4" xs={12} md={3}>
            <h4>Contact Info</h4>
            <h6>ADDRESS:</h6>
            <p>000 Street Name, City, USA</p>

            <h6>PHONE:</h6>
            <p>(123) 000-0000</p>

            <h6>EMAIL:</h6>
            <p>yourmail@mail.com</p>

            <h6>WORKING DAYS/HOURS:</h6>
            <p>Mon - Sun / 9:00 AM - 8:00 PM</p>
          </Col>
        </Row>
        <Row>
          <p className="copyrhgit text-center py-3">
            Copyright &copy; Security Camera, All Rights Reserved. Developed By
            : Jalish Mahmud
          </p>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
