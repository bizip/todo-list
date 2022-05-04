const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    // contentBase: path.resolve(__dirname, 'dist'),
    port: 5001,
    open: true,
    hot: true,
    // watchContentBase: true,
  },
  entry: {
    main: path.resolve(__dirname, 'src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].bundle.js',
    clean: true,
  },
  // loaders
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      { test: /\.(svg|cio|png|jpg|gif|jpeg)$/, type: 'asset/resource' },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  // plugins
  plugins: [
    new htmlWebpackPlugin({
      title: 'awesome title',
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/temp.html'),
    }),
  ],
};