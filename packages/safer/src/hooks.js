import { useState, useEffect, useContext } from "react";
import { getContext } from "./context";

export const useStores = (...keys) => {
  const contexts = keys.map(key => useContext(getContext(key)));
  const [stores, setStores] = useState(contexts);

  // Run only once
  useEffect(() => {}, []);

  return stores;
};
