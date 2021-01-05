const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')

module.exports = {
  entry : path.join(__dirname, '../packages/src/index.ts'),

  output : {
    filename : 'bundle.js',
    path : path.join(__dirname, '../dist'),
    libraryTarget: 'umd'
  },

  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },

  module: {
    rules: [
      {
        test: /\.(ts|js)?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin()
  ]
}
