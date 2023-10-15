import React from "react";
import { useState } from "react";

function ReviewList() {
  const [reviews] = useState([
    {
      id: 1,
      title: "Must buy",
      body: "Lorem Ipsum Dolor Sit Amet",
      user: {
        name: "John Doe",
        avatar: "https://placehold.co/40x40/png",
      },
    },
    {
      id: 2,
      title: "Good product",
      body: "Lorem Ipsum Dolor Sit Amet",
      user: {
        name: "Jane Doe",
        avatar: "https://placehold.co/40x40/png",
      },
    },
  ]);
  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Reviews</h1>
      {reviews.map((review) => (
        <div key={review.id} className="mb-3">
          <div className="flex items-center gap-2">
            <img className=" rounded-full" src={review.user.avatar} />
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
