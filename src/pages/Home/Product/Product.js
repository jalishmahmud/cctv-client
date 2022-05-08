import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import { useHistory } from "react-router";

const Product = ({ product }) => {
  const { cameraName, img, price, _id } = product;
  const history = useHistory();
  const handleBuyNowBtn = (id) => {
    history.push(`/purchase/${id}`);
  };
  return (
    <Col xs={12} md={4}>
      <Card className="my-3">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>
            <h5> {cameraName}</h5>
          </Card.Title>
        </Card.Body>
        <Card.Footer>
          <span>
            <h5 className="d-inline-block mt-1">Price: {price}</h5>
          </span>
          <Button
            onClick={() => handleBuyNowBtn(_id)}
            className="float-end"
            variant="primary"
          >
            Buy Now
          </Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Product;
