import React, { useEffect } from "react";
import { useState } from "react";
import backend from "utils/backend";

function getAvatar(user) {
  return user.avatar || `https://ui-avatars.com/api/?name=${user.name}`;
}

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
            <img className=" rounded-full" src={getAvatar(review.user)} />
            <h2>{review.user.name}</h2>
          </div>
          <h1 className="font-bold">{review.title}</h1>
          <p>{review.body}</p>
        </div>
      ))}
    </div>
  );
}

export default ReviewList;
