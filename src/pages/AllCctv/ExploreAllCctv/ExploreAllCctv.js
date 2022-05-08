import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Product from "../../Home/Product/Product";

const ExploreAllCctv = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://obscure-crag-25487.herokuapp.com/products/")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <div>
        <Container className="mb-5">
          <h2 className="mt-5 text-center">All CCTVs</h2>
          <h6 className="text-center mb-4 sub-title">
            Find out which one best for you
          </h6>
          <Row>
            {products.map((product) => (
              <Product key={product._id} product={product}></Product>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ExploreAllCctv;
