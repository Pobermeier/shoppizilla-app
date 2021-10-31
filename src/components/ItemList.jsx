import React from "react";
import ListItem from "./ListItem";

const ItemList = ({ list, onDeleteItem }) => {
  return (
    <ul className="item-list">
      {list.map((item) => (
        <ListItem
          key={item.id}
          itemName={item.itemName}
          onDeleteItem={onDeleteItem}
          id={item.id}
        />
      ))}
    </ul>
  );
};

export default ItemList;
