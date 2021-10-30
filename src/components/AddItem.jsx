import React from "react";

const AddItem = () => {
  return (
    <div className="add-item-form">
      <form>
        <input
          type="text"
          required
          placeholder="e.g. '12 eggs, 1l milk, 1kg flour'..."
          autoFocus
        />
        &nbsp;
        <button className="btn btn-primary" type="submit">
          Add Item
        </button>
      </form>
    </div>
  );
};

export default AddItem;
