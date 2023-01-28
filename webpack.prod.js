//will minify your code by default in “production mode”.
const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name][contenthash].js", //add hash value to the bundle. It is to bust the browser cache to load the newer content. It adds hash based on content change.
    clean: true,
  },
});
