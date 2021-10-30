import React from "react";
import InteractionIcon from "./InteractionIcon";

const ListItem = ({ itemName }) => {
  return (
    <li className="list-item">
      <div>{itemName}</div>
      <div className="icon-wrapper">
        <InteractionIcon
          className="edit-icon"
          clickHandler={() => {
            console.log("clicked");
          }}
        />
        <InteractionIcon className="del-icon" />
      </div>
    </li>
  );
};

export default ListItem;
