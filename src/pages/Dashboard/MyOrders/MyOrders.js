import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [isCancel, setIsCancel] = useState(true);
  const { user } = useAuth();
  useEffect(() => {
    fetch(`https://obscure-crag-25487.herokuapp.com/orders/${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [isCancel, user.email]);

  const handleCancelOrder = (id) => {
    const confirm = window.confirm(
      "Are your sure you want to cancel your order?"
    );
    if (confirm) {
      fetch(`https://obscure-crag-25487.herokuapp.com/orders/${id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert("Your order has been canceled");
            setIsCancel(!isCancel);
          } else {
            setIsCancel(false);
          }
        });
    } else {
    }
  };
  return (
    <div>
      <h4>My Orders</h4>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Product</th>
            <th>Name</th>
            <th>Order Date</th>
            <th>Quantity</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={order._id}>
              <td>{index + 1}</td>
              <td>
                <img
                  className="img-fluid"
                  style={{ width: "40px", display: "block", margin: "0 auto" }}
                  src={order.img}
                  alt=""
                />
              </td>
              <td>{order.cameraName}</td>
              <td>{order.date}</td>
              <td>{order.quantity}</td>
              <td>{order.status}</td>
              <td>
                <Button
                  onClick={() => handleCancelOrder(order._id)}
                  variant="danger"
                >
                  Cancel
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MyOrders;
