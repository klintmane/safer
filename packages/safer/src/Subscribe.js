import React from "react";
import { getContext } from "./context";

const getStore = key => {
  let Store = getContext(key);

  if (!Store) {
    console.warn(`Could not subscribe to '${key}', store does not exist.`);
    Store = getContext("__no_context");
  }

  return Store;
};

const renderChildren = children => props =>
  typeof children === "function" ? children(props) : children;

const Subscribe = props => {
  const { to } = props;

  return Array.isArray(to) ? (
    <SubscribeMany {...props} />
  ) : (
    <SubscribeOne {...props} />
  );
};

const SubscribeOne = ({ children, to }) => {
  const Store = getStore(to);
  return <Store.Consumer>{renderChildren(children)}</Store.Consumer>;
};

const SubscribeMany = ({ children, to = [], index = 0, stores = {} }) => {
  const renderSubscribers = store => {
    stores[to[index]] = store;

    return index < to.length - 1 ? (
      <SubscribeMany
        children={children}
        to={to}
        index={index + 1}
        stores={stores}
      />
    ) : (
      renderChildren(children)(stores)
    );
  };

  const Store = getStore(to[index]);
  return <Store.Consumer>{renderSubscribers}</Store.Consumer>;
};

export default Subscribe;
