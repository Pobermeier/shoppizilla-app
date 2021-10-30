import React from "react";
import NavLink from "./NavLink";
import PropTypes from "prop-types";
import logo from "../assets/img/shopping-list.png";

const Header = ({ appName, className }) => {
  return (
    <header className={className}>
      <div className="container">
        <div className="logo">
          <a href="/">
            <img src={logo} width="120" alt="ShoppiZilla" />
            <h1>{appName}</h1> 
          </a>
        </div>
        <nav>
          <ul>
            <NavLink path="/" title="Home" />
            <NavLink path="/about" title="About" />
          </ul>
        </nav>
      </div>
    </header>
  );
};

Header.propTypes = {
  appName: PropTypes.string,
};

Header.defaultProps = {
  appName: "MyApp",
};

export default Header;
