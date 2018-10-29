import React from "react";
import ReactDOM from "react-dom";
import { Store, Subscribe } from "safer";

import HooksDemo from "./hooks";

function App() {
  return (
    <div>
      <h1>Simple Store Demo</h1>
      <Store initial={{ count: 0 }} name="counter">
        <h2>Counter Subscriber (Mutator)</h2>
        <Subscribe to="counter">
          {store => (
            <button onClick={() => store.set("count", store.count + 1)}>
              Increment
            </button>
          )}
        </Subscribe>
        <hr />

        <Store name="text" initial={{ value: "" }}>
          <h2>Text Subscriber (Mutator)</h2>
          <Subscribe to="text">
            {store => (
              <input
                type="text"
                value={store.value}
                onChange={e => store.set("value", e.target.value)}
              />
            )}
          </Subscribe>
          <hr />

          <h2>Multi Subscriber</h2>
          <Subscribe to={["counter", "text"]}>
            {stores => (
              <div>
                Count is {stores.counter.count} <br />
                Text is {stores.text.value} <br />
              </div>
            )}
          </Subscribe>
          <HooksDemo />
        </Store>
      </Store>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
