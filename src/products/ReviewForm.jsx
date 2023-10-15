import React from "react";
import Form from "ui/Form";
import PropTypes from "prop-types";
import backend from "utils/backend";
import Select from "ui/Select";

function ReviewForm({ productId }) {
  const onSubmit = (values, { setSubmitting, resetForm }) => {
    values.product_id = productId;
    values.rating = Number(values.rating);
    backend
      .post("/reviews", values)
      .then(() => {
        resetForm({
          values: {
            title: "",
            body: "",
            rating: "",
          },
        });
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  const ratings = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
  ];

  const fields = [
    { name: "title", label: "Title" },
    { name: "body", label: "Body", as: "textarea" },
    { name: "rating", label: "Rating", as: Select, options: ratings },
  ];
  return (
    <Form
      title="Review Product"
      btnLabel="Review"
      fields={fields}
      onSubmit={onSubmit}
    />
  );
}

ReviewForm.propTypes = {
  productId: PropTypes.number.isRequired,
};

export default ReviewForm;
