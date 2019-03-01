import React from "react";

const contexts = {};

export const newContext = (key, initial = {}) => {
  if (!contexts[key]) {
    contexts[key] = React.createContext(initial);
  } else {
    console.error(`safer: The store '${key}' already exists!`);
  }
  return getContext(key);
};

export const getContext = key => contexts[key];

newContext("__no_context", { set: () => {}, get: () => {} });
