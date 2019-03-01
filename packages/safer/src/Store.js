import React from "react";
import { set, clone } from "./utils";
import { newContext, getContext } from "./context";
import { notify } from "./listeners";

class Store extends React.Component {
  state = { store: this.props.initial || {} };

  get = key => get(this.state.store, key);

  set = (key, val) => {
    if (key === "set" || key === "get") {
      return;
    }

    const { name = "default" } = this.props;
    const store = set(clone(this.state.store), key, val);

    notify("update", { store, change: { name, key, val } });
    this.setState({ store });
  };

  render() {
    const { children, name = "default" } = this.props;
    const { store } = this.state;

    store.set = this.set;
    store.get = this.get;

    newContext(name);
    const Context = getContext(name);

    return <Context.Provider value={store}>{children}</Context.Provider>;
  }
}

export default Store;
