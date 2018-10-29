import React from "react";

const contexts = {};

export const newContext = (key, initial = {}) => {
  if (!contexts[key]) {
    contexts[key] = React.createContext(initial);
  }
};

export const getContext = key => contexts[key];

newContext("__no_context", { set: () => {}, get: () => {} });
