import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

const NavLink = ({ path, title }) => {
  return (
    <li>
      <Link to={path}>{title}</Link>
    </li>
  );
};

NavLink.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default NavLink;
