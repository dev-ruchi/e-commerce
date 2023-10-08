import React from 'react'
import { Field, ErrorMessage } from 'formik';

function FormField({ label, id, name, type }) {
    return (
        <div className='mb-4'>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={id}>
                {label}
            </label>
            <Field type={type}
                name={name}
                id={id}
                className="shadow appearance-none
                           border rounded w-full py-2 px-3
                         text-gray-700 leading-tight
                           focus:outline-none focus:shadow-outline"
            />
            <ErrorMessage name={name} component="div" />
        </div>
    )
}

export default FormField