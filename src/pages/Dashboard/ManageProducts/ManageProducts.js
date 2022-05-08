import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [isCancel, setIsCancel] = useState(true);
  useEffect(() => {
    fetch("https://obscure-crag-25487.herokuapp.com/products/")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [isCancel]);
  // delete product
  const handleDeleteProduct = (id) => {
    const confirm = window.confirm("Are your sure you want to delete product?");
    if (confirm) {
      fetch(`https://obscure-crag-25487.herokuapp.com/products/${id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert("Product deleted");
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
      <h4>Manage All Product</h4>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Product</th>
            <th>Name</th>
            <th>SKU</th>
            <th>Stock</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product._id}>
              <td>{index + 1}</td>
              <td>
                <img
                  className="img-fluid"
                  style={{ width: "40px", display: "block", margin: "0 auto" }}
                  src={product.img}
                  alt=""
                />
              </td>
              <td>{product.cameraName}</td>
              <td>{product.sku}</td>
              <td>{product.stock}</td>
              <td>
                <Button
                  onClick={() => handleDeleteProduct(product._id)}
                  variant="danger"
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageProducts;
