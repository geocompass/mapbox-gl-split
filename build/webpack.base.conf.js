const path = require('path')

module.exports = {
  output : {
    filename : 'mapbox-gl-split.min.js',
    path : path.join(__dirname, '../dist'),
    library: 'mapboxglSplit',
    libraryTarget: 'umd'
  },

  resolve: {
    extensions: [ '.ts', '.js' ]
  },

  module: {
    rules: [
      {
        test: /\.(ts|js)?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  }
}
