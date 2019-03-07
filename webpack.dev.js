const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const Visualizer = require('webpack-visualizer-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new Visualizer({ filename: './statistics.html' })
  ],

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    hot: true,
    noInfo: true
  },
  mode: 'development'
});
