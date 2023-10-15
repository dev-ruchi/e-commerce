import React from "react";
import Form from "ui/Form";

function ReviewForm() {
  let x = 0;
  const fields = [
    { name: "title", label: "Title" },
    { name: "body", label: "Body", as: "textarea" },
  ];
  return <Form title="Review Product" btnLabel="Review" fields={fields} />;
}

export default ReviewForm;
