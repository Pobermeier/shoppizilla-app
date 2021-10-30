/* eslint-disable default-case */
import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as EditIcon } from "../assets/icon/svg/edit.svg";
import { ReactComponent as DeleteIcon } from "../assets/icon/svg/delete.svg";

const renderIcon = (className) => {
  switch (className) {
    case "edit-icon":
      return <EditIcon />;

    case "del-icon":
      return <DeleteIcon />;
  }
};

const InteractionIcon = ({ className, onClick }) => {
  return (
    <span className={className} onClick={onClick}>
      {renderIcon(className)}
    </span>
  );
};

InteractionIcon.propTypes = {
  className: PropTypes.oneOf(["edit-icon", "del-icon"]),
  onClick: PropTypes.func,
};

InteractionIcon.defaultProps = {
  className: "edit-icon",
  onClick: () => {},
};

export default InteractionIcon;
