var webpack = require('webpack');

module.exports = {
  debug: true,
  devtool: 'source-map',

  entry: './src/js/app.js',

  output: {
    path: __dirname + '/build/js',
    filename: 'app.js'
  },

  plugins: [
    new webpack.NoErrorsPlugin()
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.(eot|ttf|svg|woff|woff2)(\?.*$|$)/,
        // exclude: /node_modules/,
        loader: 'file-loader'
      },
      {
        test: /\.scss$/,
        // exclude: /node_modules/,
        loaders: ['style', 'css', 'sass']
      },
    ]
  }
};
