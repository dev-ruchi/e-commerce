import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';

const ProductCreate = () => {
    return (
        <div>
            <h1 className='lock text-gray-700 text-4xl mt-8 mb-8'>Add new product</h1>
            <Formik
                initialValues={{ title: '', description: '', price: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.title) {
                        errors.title = 'Product title is required';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    axios({
                        method: "post",
                        url: `${process.env.REACT_APP_BACKEND}/products`,
                        data: values,
                    }).finally(() => {
                        setSubmitting(false);
                    })
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                            Title
                        </label>
                        <Field className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="title" />
                        <ErrorMessage name="title" component="div" />

                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                            Price
                        </label>
                        <Field className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="price" />
                        <ErrorMessage name="price" component="div" />

                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                            Description
                        </label>

                        <Field className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="description" />
                        <ErrorMessage name="description" component="div" />
                        <div className="flex justify-center">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" type="submit" disabled={isSubmitting}>
                                Add
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default ProductCreate;