module.exports = {
  entry: "./src/components/index.js",
  output: {
    path: __dirname, //Check if this works on other computers
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    ]
  },
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: __dirname,
    historyApiFallback: true
  }
};
