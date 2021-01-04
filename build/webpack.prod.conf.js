const { merge } = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')

const prodWebpackConfig = {
  mode: 'production',
  devtool: false,

  plugins: []
}

module.exports = merge(baseWebpackConfig, prodWebpackConfig)
