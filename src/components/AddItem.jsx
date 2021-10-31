import React, { useState } from "react";
import Button from "./Button";
import { v4 } from "uuid";

const AddItem = ({ onAddItem }) => {
  const [value, setValue] = useState("");
  // const inputRef = useRef(null);

  const submitItem = (e) => {
    e.preventDefault();
    // const item = inputRef.current.value.trim();
    // if (item) {
    //   onAddItem(item);
    //   inputRef.current.value = "";
    // }
    if (value.trim()) {
      onAddItem({ id: v4(), itemName: value.trim() });
      setValue("");
    }
  };

  return (
    <div className="add-item-form">
      <form onSubmit={submitItem}>
        <input
          type="text"
          // ref={inputRef}
          onChange={(e) => setValue(e.target.value)}
          value={value}
          required
          placeholder="e.g. '12 eggs, 1l milk, 1kg flour'..."
          autoFocus
        />
        &nbsp;
        <Button isPrimary type="submit">
          Add Item
        </Button>
      </form>
    </div>
  );
};

export default AddItem;
