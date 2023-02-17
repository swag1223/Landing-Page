//in order to specify the relative path
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

//exporting a configuration object,
module.exports = {
  //entry where we will select out main js file (in this case index.js)
  entry: {
    //relative path to where webpack is run from
    bundle: [
      path.resolve(__dirname, "src/index.js"),
      path.resolve(__dirname, "src/styles/main.scss"),
    ],
  },

  //output where we specify name of compiled js (bundle.js) and output path (dist)
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    clean: true,
  },

  //Aliases are a way to let webpack know where to find our code by providing a word or character that represents a partial reference to where the code is located. Once webpack knows this, the code can be properly resolved while it is compiling during development or building the final package.
  resolve: {
    alias: {
      "@fonts": path.resolve(__dirname, "/src/assets/fonts"),
      "@images": path.resolve(__dirname, "/src/assets/images"),
    },
  },

  module: {
    rules: [
      {
        test: /\.scss$/, //any files ending with this extension we apply the loaders to them
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader", "postcss-loader"],
      },
      //MIniCssExtractPlugin: extracts CSS into separate files. It creates a CSS file per JS file which contains CSS
      //css-loader : transforms CSS to a JavaScript module
      //sass-loader: Loads a SASS/SCSS file and compiles it to CSS.

      //the Webpack config needs two additional module rules to get images working.
      {
        test: /\.html$/i,
        use: "html-loader", //parses HTML files using html-loader which allows Webpack to look for image references.
      },

      //use Asset Module to copy those images to the output directory:
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
        type: "asset/resource", //asset/resource emits a separate file and exports the URL.
        generator: {
          filename: "./assets/images/[name][ext]",
        },
      },

      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "./assets/fonts/[name][ext]",
        },
      },
    ],
  },

  plugins: [
    //html-webpack-plugin would use the index.html we created under src folder as template and thus the generated index.html in the ‘dist’ folder
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.html",
    }),
    new MiniCssExtractPlugin(),
  ],
};
