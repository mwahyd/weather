const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development", // production
  entry: {
    script: path.resolve(__dirname, "src/script.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  // loaders
  module: {
    rules: [{ test: /\.css$/, use: ["style-loader", "css-loader"] }],
  },

  // plugins
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "src/template.html"),
    }),
  ],
};
