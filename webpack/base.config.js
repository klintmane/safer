const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"]
  },
  entry: {
    devtools: ["./packages/safer-devtools"]
  },
  output: {
    path: path.resolve(__dirname, "../build"),
    publicPath: "/",
    filename: "[name].js",
    chunkFilename: "[name].js"
  },
  optimization: {
    splitChunks: {
      chunks: "async"
    }
  }
};
