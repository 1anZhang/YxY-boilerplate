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

  // devServer可以配置自定义响应头，lazy加载模式，模拟history多页后端请求
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    hot: true,
    noInfo: true,
    compress: true,
    host: '0.0.0.0',
    port: 12004,
    overlay: true
  },
  devtool: 'source-map',
  mode: 'development'
});
