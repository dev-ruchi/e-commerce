import React, { useState } from "react";
import backend from "utils/backend";
import Form from "ui/Form";
import FileUpload from "ui/FileUpload";

const ProductCreate = () => {
  const [files, setFiles] = useState([]);

  const validate = (values) => {
    const errors = {};
    if (!values.title) {
      errors.title = "Product title is required";
    }
    return errors;
  };

  const onSubmit = (values, { setSubmitting }) => {
    files.forEach((object) => {
      values.images.push(object.serverId);
    });

    backend.post("/products", values).finally(() => {
      setSubmitting(false);
    });
  };

  const fields = [
    { name: "title", label: "Title" },
    { name: "description", label: "Description", as: "textarea" },
    { name: "price", label: "Price" },
    { name: "file", as: FileUpload, files, setFiles, skipFromPayload: true },
    { name: "images", value: [], skipRender: true },
  ];

  return (
    <Form
      title="Create Product"
      btnLabel="Create"
      onSubmit={onSubmit}
      fields={fields}
      validate={validate}
    />
  );
};

export default ProductCreate;
