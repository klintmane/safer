import React from "react";
import { set } from "./utils";
import { newContext } from "./context";
import { notify } from "./listeners";

class Store extends React.Component {
  constructor(props) {
    super(props);
    const { initial, name = "default" } = props;

    this.state = { store: initial || {} };
    this.Context = newContext(name);
  }

  get = key => get(this.state.store, key);

  set = (key, val) => {
    if (key === "set" || key === "get") {
      return;
    }

    const { name = "default" } = this.props;
    const store = set({ ...this.state.store }, key, val);

    notify("update", { store, change: { name, key, val } });
    this.setState({ store });
  };

  render() {
    const { children } = this.props;
    const { store } = this.state;

    store.set = this.set;
    store.get = this.get;

    const { Context } = this;

    return <Context.Provider value={store}>{children}</Context.Provider>;
  }
}

export default Store;
