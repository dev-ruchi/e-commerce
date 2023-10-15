import React from "react";
import PropTypes from "prop-types";
import { Field, ErrorMessage } from "formik";

function FormField({ attrs }) {
  return (
    <div className="mb-4">
      <label
        htmlFor={attrs.id}
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        {attrs.label}
      </label>
      <Field
        id={attrs.id || attrs.name}
        {...attrs}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      <ErrorMessage name={attrs.name} component="div" />
    </div>
  );
}

FormField.propTypes = {
  attrs: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
};

export default FormField;
