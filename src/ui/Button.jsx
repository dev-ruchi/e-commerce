import React from "react";
import PropTypes from "prop-types";

function Button({ type, disabled, label }) {
  return (
    <button
      type={type}
      disabled={disabled}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
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
