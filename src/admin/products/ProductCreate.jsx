import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';

// Import React FilePond
import { FilePond, registerPlugin } from 'react-filepond'

// Import FilePond styles
import 'filepond/dist/filepond.min.css'

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)


const ProductCreate = () => {
    
    const [files, setFiles] = useState([])

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
                        <div className='mb-4'>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                                Title
                            </label>
                            <Field className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="title" />
                            <ErrorMessage name="title" component="div" />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                                Price
                            </label>
                            <Field className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="price" />
                            <ErrorMessage name="price" component="div" />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                                Description
                            </label>
                            <Field className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="description" />
                            <ErrorMessage name="description" component="div" />
                        </div>

                        <div className="App">
                            <FilePond
                                files={files}
                                onupdatefiles={setFiles}
                                allowMultiple={true}
                                maxFiles={3}
                                server="/api"
                                name="files" /* sets the file input name, it's filepond by default */
                                labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                                credits={{label: "", url: ""}}
                            />
                        </div>

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