import React from "react";
import ListItem from "./ListItem";

const ItemList = ({ list, onDeleteItem, onUpdateItem }) => {
  return (
    <ul className="item-list">
      {list.length === 0 && <h4>No items added yet</h4>}
      {list.map((item) => (
        <ListItem
          key={item.id}
          itemName={item.itemName}
          onDeleteItem={onDeleteItem}
          onUpdateItem={onUpdateItem}
          id={item.id}
        />
      ))}
    </ul>
  );
};

export default ItemList;
