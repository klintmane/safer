const webpack = require("webpack");
const base = require("./base.config");

module.exports = {
  ...base,
  entry: {
    ...base.entry,
    safer: ["./packages/safer"]
  },
  mode: "production",
  devtool: "source-map",
  externals: {
    react: "react",
    "react-dom": "react-dom"
  }
};
