const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const HtmlWebpackTagsPlugin = require("html-webpack-tags-plugin");
const webpackCommon = require('../../webpack.common');

const remoteApps = [
  {
    host: 'http://localhost:8081/',
    name: 'homeApp'
  },
];

const remotes = remoteApps.reduce(function(acc, cur, i) {
  acc[cur.name] = cur.name;
  return acc;
}, {});

const port = 8080;

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
      name: "home_remote",
      library: { type: "var", name: "home_remote" },
      filename: "container.js",
      remotes,
      shared: ["react", "react-dom"],
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),

    new HtmlWebpackTagsPlugin({
      tags: remoteApps.map((app) => `${app.host}/remote.js`),
      append: false,
      publicPath: false,
    }),
  ],
};