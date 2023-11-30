const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production", // production
  entry: {
    script: path.resolve(__dirname, "src/script.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  // loaders
  module: {
    rules: [
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      {
        test: /\.(gif|png)$/,
        type: "asset/resource",
        generator: {
          // keep original filenames and copy images to `dist/img/`
          filename: "img/[name][ext]",
        },
      },
    ],
  },

  // plugins
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "src/template.html"),
    }),
  ],
};
