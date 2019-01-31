const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const chalk = require('chalk');

// const APP_DIR = path.resolve(__dirname, '../src');

module.exports = {
  entry: {
    polyfill: '@babel/polyfill',
    app: './src/index.js'
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new ProgressBarPlugin({
      format: `build【${chalk.green(':bar')}】${chalk.blue.bold(':percent')} ${chalk.yellow.bold(
        ':elapsed seconds'
      )}`,
      clear: true,
      width: 40
    }),
    new HtmlWebpackPlugin({
      title: 'YxY',
      template: './public/index.html'
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
};
