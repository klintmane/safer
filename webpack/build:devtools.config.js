const webpack = require("webpack");
const base = require("./base.config");

module.exports = {
  ...base,
  entry: {
    devtools: ["./packages/safer-devtools"]
  },
  mode: "production",
  devtool: "source-map"
};
