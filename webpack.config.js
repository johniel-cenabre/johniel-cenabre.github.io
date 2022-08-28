const { join } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  entry: {
    main: join(__dirname, "./src/index.js"),
  },
  output: {
    path: join(__dirname, "./"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpg|jpe?g|png|gif|svg)$/i,
        use: "file-loader",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devtool: false,
  plugins: [
    new HtmlWebpackPlugin({
      showErrors: true,
      cache: true,
      template: join(__dirname, "./src/index.html"),
    }),
  ],
  devServer: {
    contentBase: join(__dirname, "./dist/"),
    compress: true,
    port: 3000,
  },
};

module.exports = config;
