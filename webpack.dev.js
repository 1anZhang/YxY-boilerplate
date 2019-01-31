const webpack = require('webpack');
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
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new Visualizer({ filename: './statistics.html' })
  ],

  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  mode: 'development'
});
