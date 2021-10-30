import React from "react";
import ListItem from "./ListItem";

const ItemList = () => {
  return (
    <ul className="item-list">
      <ListItem itemName="Milk"/>
      <ListItem itemName="Butter"/>
      <ListItem itemName="Buttercup"/>
    </ul>
  );
};

export default ItemList;
