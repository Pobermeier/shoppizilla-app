import React from "react";
import PropTypes from "prop-types";

const NavLink = ({ path, title }) => {
  return (
    <li>
      <a href={path}>{title}</a>
    </li>
  );
};

NavLink.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default NavLink;
