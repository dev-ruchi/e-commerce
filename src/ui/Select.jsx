import React from "react";
import PropTypes from "prop-types";
import { Field } from "formik";

function Select({ name, id, options }) {
  return (
    <Field as="select" name={name} id={id}>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </Field>
  );
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Select;
