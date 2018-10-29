const listeners = {};

if (window) {
  window.__SAFER_LISTENERS = listeners;
} else if (global) {
  global.__SAFER_LISTENERS = listeners;
}

export const notify = (...event) =>
  Object.values(listeners).forEach(l => typeof l === "function" && l(...event));
