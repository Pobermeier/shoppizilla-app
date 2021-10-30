import React from "react";
import AddItem from "./AddItem";
import ItemList from "./ItemList";

const ListWrapper = () => {
  return (
    <div className="wrapper">
      <div>
        <h2>Your Shopping List</h2>
        <p>Enter a comma-separated list of items in the input field below:</p>
      </div>
      <AddItem />
      <ItemList />
      <div>
        <button class="btn btn-danger btn-large">Clear List</button>
      </div>
    </div>
  );
};

export default ListWrapper;