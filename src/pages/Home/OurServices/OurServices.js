import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShippingFast } from "@fortawesome/free-solid-svg-icons";
import { faHeadphonesAlt } from "@fortawesome/free-solid-svg-icons";
import { faMoneyCheckAlt } from "@fortawesome/free-solid-svg-icons";

const OurServices = () => {
  const shipping = <FontAwesomeIcon icon={faShippingFast} />;
  const phone = <FontAwesomeIcon icon={faHeadphonesAlt} />;
  const moneyBack = <FontAwesomeIcon icon={faMoneyCheckAlt} />;
  return (
    <div className="py-3">
      <Container>
        <Row className="pt-5">
          <Col className="p-2 pt-3 mb-4 rounded shadow-sm" xs={12} md={4}>
            <Row>
              <Col className="d-flex justify-content-center" xs={3}>
                <span className="custom-icon">{shipping}</span>
              </Col>
              <Col xs={9}>
                <h6>FREE SHIPPING AND RETURN </h6>
                <p>Free shipping on all orders over 2999 Tk</p>
              </Col>
            </Row>
          </Col>
          <Col className="p-2 pt-3 mb-4 rounded shadow-sm" xs={12} md={4}>
            <Row>
              <Col className="d-flex justify-content-center" xs={3}>
                <span className="custom-icon">{phone}</span>
              </Col>

              <Col xs={9}>
                <h6>ONLINE SUPPORT</h6>
                <p>24/7 Online support system available</p>
              </Col>
            </Row>
          </Col>
          <Col className="p-2 pt-3 mb-4 rounded shadow-sm" xs={12} md={4}>
            <Row>
              <Col className="d-flex justify-content-center" xs={3}>
                <span className="custom-icon">{moneyBack}</span>
              </Col>
              <Col xs={9}>
                <h6>MONEY BACK GUARANTEE </h6>
                <p>100% money back guarantee so you're sage</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OurServices;
