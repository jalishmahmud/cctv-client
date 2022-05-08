import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";

const ManageAllOrders = () => {
  const [orders, setOrders] = useState([]);
  const [reRender, setReRender] = useState(true);
  useEffect(() => {
    fetch(`https://obscure-crag-25487.herokuapp.com/orders`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [reRender]);

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
            setReRender(!reRender);
          } else {
            setReRender(false);
          }
        });
    } else {
    }
  };
  const handleApprovedOrder = (id) => {
    const order = { status: "Approved" };
    fetch(`https://obscure-crag-25487.herokuapp.com/orders/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          setReRender(!reRender);
        } else {
          setReRender(false);
        }
      });
  };
  return (
    <div>
      <h4>Manage All Orders</h4>
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
                <span>
                  <Button
                    className="mb-2"
                    onClick={() => handleApprovedOrder(order._id)}
                    variant="primary"
                  >
                    Approve
                  </Button>
                  <Button
                    onClick={() => handleCancelOrder(order._id)}
                    variant="danger"
                  >
                    Cancel
                  </Button>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageAllOrders;
