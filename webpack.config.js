var path = require('path');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

var config = {
  entry: './index.js',
  output: {
    path: __dirname + '/lib',
    filename: 'app.js',
    publicPath: __dirname + '/app'
  },
  module: {
    loaders: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel',
        exclude: /(node_modules)/
      }
    ]
  },
  plugins: []
};

new WebpackDevServer(webpack(config), {
  contentBase: './app',
  hot: true,
  debug: true
}).listen('4200', '0.0.0.0', function (err, result) {
  if (err) {
    console.log(err);
  }
});

console.log('-------------------------');
console.log('Local web server runs at http://localhost:4200');
console.log('-------------------------');

module.exports = config;
