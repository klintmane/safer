import { useState, useEffect, useContext } from "react";
import { getContext } from "./context";

export const useStores = (...keys) => {
  const [stores, setStores] = useState([]);
  const contexts = keys.map(key => useContext(getContext(key)));

  const handleSetStores = s => {
    setStores(s);
  };

  useEffect(() => {
    handleSetStores(contexts);

    // Cleanup
    return () => {};
  });

  return stores;
};

export default useStores;
