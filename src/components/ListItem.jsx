import React, { useState } from "react";
import InteractionIcon from "./InteractionIcon";
import PropTypes from "prop-types";

const ListItem = ({ id, itemName, onDeleteItem, onUpdateItem }) => {
  const [isEditable, setIsEditable] = useState(false);
  const [editValue, setEditValue] = useState(itemName);

  const onHandleSubmit = (e) => {
    e.preventDefault();

    if (editValue.trim() === "") {
      return;
    }

    onUpdateItem(id, editValue);

    setIsEditable(false);
  };

  return (
    <li className="list-item">
      {isEditable ? (
        <form onSubmit={onHandleSubmit}>
          <input
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
          />
        </form>
      ) : (
        <div onDoubleClick={() => setIsEditable(true)}>{itemName}</div>
      )}

      <div className="icon-wrapper">
        <InteractionIcon
          className="edit-icon"
          onClick={() => setIsEditable((prevIsEditable) => !prevIsEditable)}
        />
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
