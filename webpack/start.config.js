const webpack = require("webpack");
const base = require("./base.config");

module.exports = {
  ...base,
  entry: {
    demo: ["./packages/safer-demo"],
    devtools: ["./packages/safer-devtools"]
  },
  mode: "development",
  devtool: "cheap-module-eval-source-map",
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    port: 1234,
    host: "0.0.0.0",
    contentBase: "./build",
    historyApiFallback: true,
    publicPath: "/",
    hot: true
  }
};
