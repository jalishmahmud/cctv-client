import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";

const Review = () => {
  const { user } = useAuth();
  const [isSuccess, setIsSuccess] = useState(false);
  const date = new Date();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    data.date = date.toLocaleDateString();
    fetch("https://obscure-crag-25487.herokuapp.com/reviews", {
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
          <span>Your Name</span>
          <input
            className="form-control mb-3 mt-2"
            defaultValue={user.displayName}
            {...register("name")}
          />

          <span>Email</span>
          <input
            className="form-control mb-3 mt-2"
            defaultValue={user.email}
            type="email"
            {...register("email")}
          />

          <span>Rating</span>
          <input
            className="form-control mb-3 mt-2"
            defaultValue="5"
            type="number"
            min="0"
            max="5"
            {...register("rating")}
          />

          <span>What you would like to say about us?</span>
          <textarea
            className="form-control mb-3 mt-2"
            placeholder="Your review"
            style={{ height: "100px" }}
            type="number"
            {...register("review")}
          />

          <input className="btn btn-primary" type="submit" value="Submit" />
          {isSuccess && (
            <Alert className="my-3" variant="success">
              Review Accepted, Thanks!
            </Alert>
          )}
        </form>
      </div>
    </div>
  );
};

export default Review;
