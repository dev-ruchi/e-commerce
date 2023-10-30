import React from "react";
import PropTypes from "prop-types";

function Button({
  uiType = "primary",
  disabled = false,
  label,
  btnType = "button",
}) {
  const uiClassMap = {
    primary: "bg-blue-500 hover:bg-blue-700 text-white",
    secondary: "bg-gray-300 hover:bg-gray-400 text-gray-800",
    success: "bg-green-700 hover:bg-green-800 text-white",
  };

  return (
    <button
      type={btnType}
      disabled={disabled}
      className={`${uiClassMap[uiType]} text-base font-normal py-2 px-4 rounded`}
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  btnType: PropTypes.oneOf(["submit", "button", "reset"]),
  uiType: PropTypes.oneOf(["primary", "secondary", "success"]),
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  typeSubmit: PropTypes.bool,
};

export default Button;
