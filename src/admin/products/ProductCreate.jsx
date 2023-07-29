import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const ProductCreate = () => {
    return (
        <div>
            <h1 className='lock text-gray-700 text-4xl mt-8 mb-8'>ProductCreate</h1>
            <Formik
                initialValues={{ title: '', descrption: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.title) {
                        errors.title = 'Required';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
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
                        <div class="flex justify-center">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" type="submit" disabled={isSubmitting}>
                                ProductCreate
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default ProductCreate;