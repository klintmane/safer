import React from "react";
import ReactDOM from "react-dom";
import DevTools from "./DevTools";

let container = document.getElementById("safer-devtools");

if (!container) {
  container = document.createElement("div");
  container.id = "safer-devtools";
  document.body.appendChild(container);
}

ReactDOM.render(<DevTools />, container);
