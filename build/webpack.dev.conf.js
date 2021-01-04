const HtmlWebpackPlugin = require('html-webpack-plugin')
const { merge } = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf')

const devWebpackConfig = {
  mode: 'development',
  devtool: 'source-map',

  plugins: [
    new HtmlWebpackPlugin({
      filename: path.join(__dirname, '../example/test.html'),
      template: path.join(__dirname, '../packages/template/index.htm')
    }),
  ]
}

module.exports = merge(baseWebpackConfig, devWebpackConfig)
