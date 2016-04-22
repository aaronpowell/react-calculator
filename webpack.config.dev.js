var webpack = require('webpack');
var config = require('./webpack.config.base');

config.devtool = 'cheap-module-inline-source-map';

config.entry = [
  'webpack-hot-middleware/client?reload=true',
  './src/index'
];

config.output.publicPath = 'http://localhost:' + (process.env.PORT || 3000) + '/public/';
config.output.devtoolModuleFilenameTemplate = function(info) {
  if (info.absoluteResourcePath.charAt(0) === '/') {
    return 'file://' + info.absoluteResourcePath;
  } else {
    return 'file:///' + info.absoluteResourcePath;
  }
};

config.output.devtoolFallbackModuleFilenameTemplate = function(info) {
  if (info.absoluteResourcePath.charAt(0) === '/') {
    return 'file://' + info.absoluteResourcePath + '?' + info.hash;
  } else {
    return 'file:///' + info.absoluteResourcePath + '?' + info.hash;
  }
};

config.plugins.push(
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  new webpack.DefinePlugin({
    '__DEV__': true,
    'process.env': {
      'NODE_ENV': JSON.stringify('development')
    }
  })
);

module.exports = config;
