const path = require('path')
const { merge } = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')

const prodWebpackConfig = {
  mode: 'production',
  devtool: false,
  entry : path.join(__dirname, '../src/index.ts')
}

module.exports = merge(baseWebpackConfig, prodWebpackConfig)
