/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');

const root = path.join(__dirname, 'src');
const outputPath = path.join(__dirname, 'dist');

module.exports = {
  entry: {
    main: ['core-js/stable', path.resolve(root, 'index.js')],
  },
  output: {
    pathinfo: true,
    path: path.resolve(outputPath, 'js'),
    filename: 'js/speakers.[contenthash].js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js'],
  },
  plugins: [
    new ESLintPlugin(),
  ],
  devServer: {
    contentBase: outputPath,
    publicPath: '/',
    compress: true,
    port: 3000,
    historyFallbackApi: true,
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        include: root,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: true,
            cacheDirectory: true,
          },
        },
      },
    ],
  },
};
