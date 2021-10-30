import React from "react";
import PropTypes from "prop-types";

const currentYear = new Date().getFullYear();

const Footer = ({ companyName }) => {
  return (
    <footer className="footer">
      &copy;
      {currentYear} {companyName}.
    </footer>
  );
};

Footer.propTypes = {
  companyName: PropTypes.string,
};

Footer.defaultProps = {
  companyName: "Your company name here",
};

export default Footer;
