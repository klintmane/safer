import { useState, useEffect, useContext } from "react";
import { getContext } from "./context";

export const useStores = (...keys) => {
  const contexts = keys.map(key =>
    useContext(getContext(key) || getContext("__no_context"))
  );
  const [stores, setStores] = useState(contexts);

  // Run only once
  useEffect(() => {}, []);

  return stores;
};
