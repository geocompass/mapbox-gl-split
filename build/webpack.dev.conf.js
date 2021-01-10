const path = require('path')
const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const baseWebpackConfig = require('./webpack.base.conf')

const devWebpackConfig = {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, "example"),
    compress: true,
    port: 9000
  },
  entry: path.resolve(__dirname, '../example/index.ts'),
  
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../example/static'),
          to: ('./static')
        }
      ]
    }),
    new HtmlWebpackPlugin({
      title: 'mapbox-gl-split',
      template: path.join(__dirname, '../example/index.html')
    }),
  ]
}

module.exports = merge(baseWebpackConfig, devWebpackConfig)
