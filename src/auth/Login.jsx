// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';

const Login = () => (
    <div>
        <h1 className='lock text-gray-700 text-4xl mt-8 mb-8'>Login</h1>
        <Formik
            initialValues={{ username: '', password: '' }}
            validate={values => {
                const errors = {};
                if (!values.username) {
                    errors.username = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.username)
                ) {
                    errors.username = 'Invalid email address';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
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
                }, 400);
            }}
        >
            {({ isSubmitting }) => (
                <Form>
                    <div className='mb-4'>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email Or Phone
                        </label>
                        <Field className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" name="username" />
                        <ErrorMessage name="username" component="div" />
                    </div>

                    <div className='mb-4'>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>

                        <Field className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" name="password" />
                        <ErrorMessage name="password" component="div" />
                    </div>

                    <div className="flex justify-center">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" type="submit" disabled={isSubmitting}>
                            Login
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    </div>
);

export default Login;