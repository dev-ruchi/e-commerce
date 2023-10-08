// Render Prop
import React from 'react';
import Form from '../ui/Form';
import axios from 'axios';

const Login = () => {
    const fields = [
        {
            label: "Email or password",
            id: "username",
            name: "username",
            value: "",
            type: "text"
        },
        {
            label: "Passowrd",
            id: "password",
            name: "password",
            value: "",
            type: "password"
        },
    ];

    const validate = values => {
        const errors = {};
        if (!values.username) {
            errors.username = 'Required';
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.username)
        ) {
            errors.username = 'Invalid email address';
        }
        return errors;
    }

    const onSubmit = (values, { setSubmitting }) => {
        axios({
            method: "post",
            url: `${process.env.REACT_APP_BACKEND}/auth/login`,
            data: values,
        })
            .then(response => {
                localStorage.setItem("access_token", response.data.access_token)
            })
            .catch(e => console.log(e))
            .finally(() => {
                setSubmitting(false);
            })
    }

    return (
        <Form title="Login"
            btnLabel="Login"
            onSubmit={onSubmit}
            fields={fields}
            validate={validate}
        />
    )
};

export default Login;