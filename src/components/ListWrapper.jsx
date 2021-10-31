import React, { useState } from "react";
import AddItem from "./AddItem";
import Button from "./Button";
import ItemList from "./ItemList";

const ListWrapper = () => {
  const [list, setList] = useState([]);

  const addItemToList = (item) => {
    setList((prevItems) => [...prevItems, item]);
  };

  const deleteAllItems = () => {
    setList([]);
  };

  const updateItem = (id, newName) => {
    setList((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { id: item.id, itemName: newName } : item,
      ),
    );
  };

  const deleteItem = (id) => {
    setList((prevItems) => {
      return prevItems.filter((item) => item.id !== id);
    });
  };

  return (
    <div className="wrapper">
      <div>
        <h2>Your Shopping List</h2>
        <p>Enter a comma-separated list of items in the input field below:</p>
      </div>
      <AddItem onAddItem={addItemToList} />
      <ItemList list={list} onDeleteItem={deleteItem} onUpdateItem={updateItem}/>
      {list.length > 0 && (
        <div>
          <Button isDanger isLarge onClick={deleteAllItems}>
            Clear List
          </Button>
        </div>
      )}
    </div>
  );
};

export default ListWrapper;
