const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  //mode the webpack should run in
  mode: "development",

  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 3500,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },

  devtool: "source-map",
});
