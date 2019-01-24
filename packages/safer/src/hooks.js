import { useContext } from "react";
import { getContext } from "./context";

export const useStores = (...keys) => {
  const stores = keys.map(key =>
    useContext(getContext(key) || getContext("__no_context"))
  );

  return stores;
};
