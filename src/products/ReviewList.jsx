import React, { useEffect } from "react";
import { useState } from "react";
import backend from "utils/backend";

function ReviewList() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    backend.get("/reviews").then((res) => setReviews(res.data));
  }, []);

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Reviews</h1>
      {reviews.map((review) => (
        <div key={review.id} className="mb-3">
          <div className="flex items-center gap-2">
            <img
              className=" rounded-full"
              src="https://placehold.co/40x40/png"
            />
            <h2>Jane Doe</h2>
          </div>
          <h1 className="font-bold">{review.title}</h1>
          <p>{review.body}</p>
        </div>
      ))}
    </div>
  );
}

export default ReviewList;
