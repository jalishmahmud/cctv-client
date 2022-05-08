import React, { useEffect, useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://obscure-crag-25487.herokuapp.com/products/")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="my-3">
      <h2 className="text-center">Our Popular CCTVs</h2>
      <h6 className="text-center mb-4 sub-title">Find out which one for you</h6>
      <Container>
        <Row>
          {products.slice(0, 6).map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <Button className="custom-btn mt-4" variant="primary">
              <Link to="/allCctv">Explore All CCTV</Link>
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Products;
