import React from "react";
import InteractionIcon from "./InteractionIcon";
import PropTypes from "prop-types";

const ListItem = ({ id, itemName, onDeleteItem }) => {
  return (
    <li className="list-item">
      <div>{itemName}</div>
      <div className="icon-wrapper">
        <InteractionIcon className="edit-icon" />
        <InteractionIcon
          className="del-icon"
          onClick={() => onDeleteItem(id)}
        />
      </div>
    </li>
  );
};

ListItem.propTypes = {
  id: PropTypes.string.isRequired,
  itemName: PropTypes.string.isRequired,
};

export default ListItem;
