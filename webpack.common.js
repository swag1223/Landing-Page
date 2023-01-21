//in order to specify the relative path
const path = require("path"); //path package comes standard with node
const HtmlWebpackPlugin = require("html-webpack-plugin");

//exporting a configuration object i.e. module.exports and inside this object ,
module.exports = {
  //mode the webpack should run in
  // mode: "development",

  //the entry where we will select out main js file (in this case index.js)

  entry: {
    bundle: path.resolve(__dirname, "src/index.js"), //relative path to where webpack is run from
  },

  //output where we specify name of compiled js (bundle.js) and output path (dist)
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name][contenthash].js", //add hash value to the bundle. It is to bust the browser cache to load the newer content. It adds hash based on content change.
    assetModuleFilename: "[name][ext]",
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.scss$/, //any files ending with this extension we apply the loaders to them
        use: ["style-loader", "css-loader", "sass-loader"], //these loaders will run in reverse order
      }, //injects css into html into style tag in header //linting of code //Loads a SASS/SCSS file and compiles it to CSS.

      {
        test: /\.html$/i,
        use: "html-loader",
      },
      //the Webpack config needs two additional module rules to get images working. The first rule parses HTML files using html-loader which allows Webpack to look for image references. The second uses a Webpack 5 Asset Module to copy those images to the output directory:

      //Since Webpack 5, we don’t need to use a loader in order to compile images. We only need to add some rules
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
        type: "asset/resource", //asset/resource emits a separate file and exports the URL.
        generator: {
          filename: "./assests/images/[name][ext]",
        },
      },

      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "./assests/fonts/[name][ext]",
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.html",
    }),
  ],
};
