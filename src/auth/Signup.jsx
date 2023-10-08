import React from 'react';
import Form from 'ui/Form'

import backend from "utils/backend";

const Signup = () => {

    const fields = [
        {
            label: "Name",
            name: "name",
        },
        {
            label: "Email",
            name: "email",
        },
        {
            label: "Phone",
            name: "phone",
        },
        {
            label: "Password",
            name: "password",
            type: "password"
        },
    ];
    const onSubmit = (values, { setSubmitting }) => {
        backend.post("/auth/signup", values)
            .then(response => {
                localStorage.setItem("access_token", response.data.access_token)
            })
            .finally(() => {
                setSubmitting(false);
            })
    }

    const validate = values => {
        const errors = {};
        if (!values.email) {
            errors.email = 'Required';
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
            errors.email = 'Invalid email address';
        }
        return errors;
    }

    return (
        <Form title="Signup"
            btnLabel="Signup"
            onSubmit={onSubmit}
            fields={fields}
            validate={validate}
        />
    )
};

export default Signup;