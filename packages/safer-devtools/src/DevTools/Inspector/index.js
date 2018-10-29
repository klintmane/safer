import React from "react";

import * as style from "./style";
import Mutations from "./Mutations";
import MutationView from "./MutationView";
import NoChanges from "./NoChanges";

const clone = o => JSON.parse(JSON.stringify(o));
const add = (arr, el) => {
  arr = [el, ...arr];
  if (arr.length > 25) {
    arr.pop();
  }
  return arr;
};

class Inspector extends React.PureComponent {
  state = { stores: {}, mutations: [], changes: [], active: 0 };

  componentDidMount() {
    setTimeout(() => {
      const listeners = window.__SAFER_LISTENERS;
      if (listeners) {
        listeners.devtools = listeners.devtools || [];
        listeners.devtools = this.storeEvent;
      }
    }, 100);
  }

  storeEvent = (event, payload) => {
    switch (event) {
      case "update":
        this.storeUpdate(payload);
        return;
    }
  };

  storeUpdate = ({ store, change }) => {
    const { stores, mutations, changes } = this.state;

    const updatedStore = clone(store);
    const mutation = { ...stores, [change.name]: updatedStore };

    this.setState({
      stores: mutation,
      mutations: add(mutations, clone(mutation)),
      changes: add(changes, change),
      active: 0
    });
  };

  render() {
    const { mutations, changes, active } = this.state;
    const activeChange = changes[active];

    return (
      <div className={style.inspector(this.props)}>
        {activeChange ? (
          <MutationView data={mutations[active]} />
        ) : (
          <NoChanges />
        )}
        <Mutations
          active={active}
          mutations={mutations}
          changes={changes}
          onSelect={active => this.setState({ active })}
        />
      </div>
    );
  }
}

export default Inspector;
