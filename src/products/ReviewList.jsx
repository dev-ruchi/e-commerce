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
      <h1 className="text-xl font-bold mb-4">Recent reviews</h1>
      {reviews.map((review) => (
        <div key={review.id} className="mb-5">
          <p className="font-bold mb-1">{review.title}</p>
          <p className="mb-2">{review.body}</p>
          <div className="flex items-center gap-2">
            <p className="text-gray-500">- {review.user.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ReviewList;
