import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import reviewBG from "../../../images/review_bg.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const Reviews = () => {
  const star = <FontAwesomeIcon icon={faStar} />;
  const [reviews, setReview] = useState([]);
  useEffect(() => {
    fetch("https://obscure-crag-25487.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  return (
    <div className="my-5">
      <h2 className="text-center">Reviews</h2>
      <h6 className="text-center mb-4 sub-title">
        Look what out client said about us
      </h6>
      <div className="mt-5">
        <Carousel variant="dark">
          {reviews.map((review) => (
            <Carousel.Item key={review._id}>
              <img className="d-block w-100" src={reviewBG} alt="First slide" />
              <Carousel.Caption>
                <div className="mb-3">
                  {[...Array(parseFloat(review.rating))].map((x, i) => (
                    <span style={{ color: "#F7A404" }} key={i}>
                      {star}
                    </span>
                  ))}
                  {[...Array(5 - parseFloat(review.rating))].map((x, i) => (
                    <span style={{ color: "#ddd" }} key={i}>
                      {star}
                    </span>
                  ))}
                </div>
                <p>{review.review}</p>
                <h6>- {review.name}</h6>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Reviews;
