import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";

const AddProduct = () => {
  const { user } = useAuth();
  const [isSuccess, setIsSuccess] = useState(false);
  const date = new Date();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    data.date = date.toLocaleDateString();
    data.adminEmail = user.email;
    fetch("https://obscure-crag-25487.herokuapp.com/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          setIsSuccess(true);
          reset();
        }
      });
  };

  return (
    <div>
      <h4>Add New Product</h4>
      <div className="mt-5 border rounded p-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <span>Product Name</span>
          <input
            className="form-control mb-3 mt-2"
            placeholder="Product Name"
            {...register("cameraName", { required: true })}
          />

          <span>Price</span>
          <input
            className="form-control mb-3 mt-2"
            placeholder="Price"
            type="number"
            {...register("price", { required: true })}
          />

          <span>Stock</span>
          <input
            className="form-control mb-3 mt-2"
            placeholder="Stoke"
            type="number"
            {...register("stock", { required: true })}
          />

          <span>Warranty</span>
          <input
            className="form-control mb-3 mt-2"
            placeholder="Warranty"
            {...register("warranty")}
          />

          <span>SKU</span>
          <input
            className="form-control mb-3 mt-2"
            placeholder="SKU"
            {...register("sku")}
          />

          <span>Category</span>
          <input
            className="form-control mb-3 mt-2"
            placeholder="Category"
            {...register("category")}
          />

          <span>Description</span>
          <input
            className="form-control mb-3 mt-2"
            placeholder="description"
            {...register("description")}
          />

          <span>Product Image URL</span>
          <input
            className="form-control mb-3 mt-2"
            placeholder="Image url"
            {...register("img", { required: true })}
          />

          <input
            className="btn btn-primary"
            type="submit"
            value="Add Product"
          />
          {isSuccess && (
            <Alert className="my-3" variant="success">
              Product added successfully.
            </Alert>
          )}
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
