var webpack = require('webpack');

module.exports = {
  entry: {
    wt: './../src/warthog.ts',
    st: './../src/start.js'
  },
  //devtool: 'source-map',
  output: {
    path: './../dist',
    filename: '[id].min.js',
    libraryTarget: "var",
    library: '_[name]'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    })
  ]
};
