import React from "react";
import PropTypes from "prop-types";

function Button({ type, disabled, label }) {
  return (
    <button
      type={type}
      disabled={disabled}
      className="bg-blue-500 hover:bg-blue-700 text-white text-base font-normal py-2 px-4 rounded"
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
};

export default Button;
