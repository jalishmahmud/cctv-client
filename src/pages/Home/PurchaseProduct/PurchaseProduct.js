import React, { useEffect, useState } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";

import { useParams } from "react-router";
import useAuth from "../../../hooks/useAuth";
import { useForm } from "react-hook-form";

const PurchaseProduct = () => {
  const { productId } = useParams();
  const { user } = useAuth();
  const [product, setProduct] = useState([]);
  const [isOrdered, seIsOrdered] = useState(false);
  const { cameraName, price, img, stock, description, warranty } = product;
  useEffect(() => {
    fetch(`https://obscure-crag-25487.herokuapp.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [productId]);
  const date = new Date();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    data.date = date.toLocaleDateString();
    data.cameraName = cameraName;
    data.status = "Pending";
    data.img = img;
    fetch("https://obscure-crag-25487.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          seIsOrdered(true);
          reset();
        }
      });
  };
  return (
    <Container className="my-5">
      <Row>
        <Col xs={12} md={5}>
          <img className="img-fluid" src={img} alt="" />
        </Col>
        <Col xs={12} md={7}>
          <div>
            <div>
              <h3>{cameraName}</h3>
              <h5 className="my-4">
                Price: <span className="sub-title">{price} Tk</span>
              </h5>
              <h6 className="sub-title">Stock: {stock}</h6>
              <h6>Warranty: {warranty}</h6>
            </div>
            {/*  order form */}
            <div className="mt-5 border rounded p-4">
              <h4>Order Now</h4>
              <form onSubmit={handleSubmit(onSubmit)}>
                <span>Your Full Name</span>
                <input
                  className="form-control mb-3 mt-2"
                  defaultValue={user?.displayName}
                  {...register("name")}
                />
                <span>Your Email</span>
                <input
                  className="form-control mb-3 mt-2"
                  defaultValue={user?.email}
                  {...register("email")}
                />
                <span>Your Gender</span>
                <select
                  className="form-select mb-3 mt-2"
                  {...register("gender")}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                <span>Mobile Number</span>
                <input
                  className="form-control mb-3 mt-2"
                  placeholder="Your Mobile Number"
                  {...register("mobile")}
                />
                <span>Product Quantity</span>
                <input
                  type="number"
                  defaultValue="1"
                  className="form-control mb-3 mt-2"
                  placeholder="Your full address"
                  {...register("quantity")}
                />
                <span>Shipping Address</span>
                <input
                  className="form-control mb-3 mt-2"
                  placeholder="Your full address"
                  {...register("shipping")}
                />

                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Place Order"
                />
                {isOrdered && (
                  <Alert className="my-3" variant="success">
                    Order success, Thank you for being with us.
                  </Alert>
                )}
              </form>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="border-top pt-3 mt-5" sx={12}>
          <h5>Description</h5>
          <p>{description}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default PurchaseProduct;
