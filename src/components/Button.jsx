import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

const Button = ({ children, isLarge, isPrimary, isDanger, type, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
        "btn",
        { "btn-primary": isPrimary },
        { "btn-danger": isDanger },
        { "btn-large": isLarge },
      )}
      type={type}>
      {children}
    </button>
  );
};

Button.propTypes = {
  isLarge: PropTypes.bool,
  isPrimary: PropTypes.bool,
  isDanger: PropTypes.bool,
  type: PropTypes.oneOf(["button", "reset", "submit"]),
};


Button.defaultProps = {
  isLarge: false,
  isPrimary: false,
  isDanger: false,
  type: "button",
};

export default Button;
