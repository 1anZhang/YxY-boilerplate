const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
module.exports = merge(common, {
  plugins: [
    // new UglifyJSPlugin({
    //   cache: true,
    //   parallel: true,
    //   sourceMap: true // set to true if you want JS source maps
    // }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
  devtool: 'source-map',
  mode: 'production',
});