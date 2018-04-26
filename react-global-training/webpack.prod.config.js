const path = require("path");

module.exports = {
  context: path.resolve(__dirname, "src"),

  mode: "production",
  devtool: 'none',

  entry: "./index.js",

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
        // use: ExtractTextPlugin.extract({
        //   fallback: "style-loader",
        //   use: "css-loader"
        // })
      }      
    ]
  },
  watch: false
};
