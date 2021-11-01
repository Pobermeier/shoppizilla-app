import React, { useEffect, useState } from "react";
import {
  addDoc,
  deleteDoc,
  collection,
  onSnapshot,
  doc,
  setDoc,
} from "@firebase/firestore";
import { db } from "../firebaseConfig";
import useLocalstoragePersist from "../hooks/useLocalstoragePersist";
import AddItem from "./AddItem";
import Button from "./Button";
import ItemList from "./ItemList";

const ListWrapper = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "items"), (collection) => {
      const newItems = [];

      collection.forEach((item) => {
        newItems.push({ id: item.id, ...item.data() });
      });

      setList(newItems);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useLocalstoragePersist("list", list, setList);

  const addItemToList = async ({ id, itemName }) => {
    // setList((prevItems) => [item, ...prevItems]);
    try {
      await addDoc(collection(db, "items"), {
        itemName,
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  const deleteAllItems = () => {
    // setList([]);
    list.forEach(async (item) => deleteItem(item.id));
  };

  const updateItem = async (id, newName) => {
    // setList((prevItems) =>
    //   prevItems.map((item) =>
    //     item.id === id ? { id: item.id, itemName: newName } : item,
    //   ),
    // );
    await setDoc(doc(db, "items", id), {
      itemName: newName,
    });
  };

  const deleteItem = async (id) => {
    // setList((prevItems) => {
    //   return prevItems.filter((item) => item.id !== id);
    // });
    await deleteDoc(doc(db, "items", id));
  };

  return (
    <div className="wrapper">
      <div>
        <h2>Your Shopping List</h2>
        <p>Enter a comma-separated list of items in the input field below:</p>
      </div>
      <AddItem onAddItem={addItemToList} />
      <ItemList
        list={list}
        onDeleteItem={deleteItem}
        onUpdateItem={updateItem}
      />
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
