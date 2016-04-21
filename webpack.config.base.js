var webpack = require('webpack');
var path = require('path');
var CleanWebpackPlugin = require('clean-webpack-plugin');

var config = {
    preLoaders: [{
        test: /\.ts/,
        loader: 'tslint',
        exclude: /node_modules/
    }],

    output: {
        filename: 'bundle.js',
        publicPath: '/public/'
    },

    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },

    loaders: [{
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src')
    }],

    plugins: [
        new CleanWebpackPlugin(['public'], {
            root: __dirname
        })
    ]
};

module.exports = config;
