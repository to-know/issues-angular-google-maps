var path = require('path');
var webpack = require('webpack');

const config = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
              presets: ['es2015']
            }
        },
        {
            test: /\.html$/,
            loader: 'html!',
            query: {
              minimize: true
            }
        },
        { test: /\.coffee$/, loader: "coffee-loader" },
        { test: /\.(coffee\.md|litcoffee)$/, loader: "coffee-loader?literate" }
    ]
  },
  devtool: '#source-map'
};

module.exports = config;