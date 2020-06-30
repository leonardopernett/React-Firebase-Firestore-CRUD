const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlPlugin = new HtmlWebpackPlugin({
   template: "./src/index.html" 
})


module.exports = {
  entry: "./src/app/index.js",
  output: {
    path: path.resolve("./dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      { test: /\.js$/, use: "babel-loader" },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [HtmlPlugin],
};