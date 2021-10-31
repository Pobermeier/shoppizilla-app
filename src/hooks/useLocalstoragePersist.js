import { useEffect } from "react";

const useLocalstoragePersist = (keyString, itemToObserve, setterFn) => {
  useEffect(() => {
    const item = localStorage.getItem(keyString);
    if (item) {
      setterFn(JSON.parse(item));
    }
  }, [keyString, setterFn]);

  useEffect(() => {
    localStorage.setItem(keyString, JSON.stringify(itemToObserve));
  }, [itemToObserve, keyString]);
};

export default useLocalstoragePersist;
