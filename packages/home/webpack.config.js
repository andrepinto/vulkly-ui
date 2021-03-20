const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const webpackCommon = require('../../webpack.common');

const port = 8081;

module.exports = {
  ...webpackCommon,
  devServer: {
    ...webpackCommon.devServer,
    port,
  },
  output: {
    publicPath: `http://localhost:${port}/`,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "homeApp",
      library: { type: "var", name: "homeApp" },
      filename: "remote.js",
      exposes: {
        "./HomeApp": "./src/app",
      },
      shared: ["react", "react-dom"],
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};