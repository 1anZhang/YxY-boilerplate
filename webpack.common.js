const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const chalk = require('chalk');

// const APP_DIR = path.resolve(__dirname, '../src');

module.exports = {
  entry: {
    polyfill: '@babel/polyfill',
    app: './src/index'
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
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, 'src')],
    extensions: ['.js', '.json', '.jsx', '.less', 'jpg', 'png', 'svg'],
    alias: {
      src: path.resolve(__dirname, 'src'),
      actions: path.resolve(__dirname, 'src/actions'),
      images: path.resolve(__dirname, 'src/images'),
      containers: path.resolve(__dirname, 'src/containers'),
      reducers: path.resolve(__dirname, 'src/reducers'),
      sagas: path.resolve(__dirname, 'src/sagas'),
      pages: path.resolve(__dirname, 'src/pages'),
      components: path.resolve(__dirname, 'src/components')
    }
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
