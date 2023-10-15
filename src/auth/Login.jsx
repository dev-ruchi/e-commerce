// Render Prop
import React from "react";
import Form from "ui/Form";
import backend from "utils/backend";

const Login = () => {
  const fields = [
    {
      label: "Email or password",
      name: "username",
    },
    {
      label: "Password",
      name: "password",
      type: "password",
    },
  ];

  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.username)
    ) {
      errors.username = "Invalid email address";
    }
    return errors;
  };

  const onSubmit = (values, { setSubmitting }) => {
    backend
      .post("/auth/login", values)
      .then((response) => {
        localStorage.setItem("access_token", response.data.access_token);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <Form
      title="Login"
      btnLabel="Login"
      onSubmit={onSubmit}
      fields={fields}
      validate={validate}
    />
  );
};

export default Login;
