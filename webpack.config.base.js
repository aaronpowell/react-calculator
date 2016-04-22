var webpack = require('webpack');
var path = require('path');
var CleanWebpackPlugin = require('clean-webpack-plugin');

var config = {
    preLoaders: [{
        test: /\.ts(x?)$/,
        loader: 'tslint',
        exclude: /node_modules/
    }],

    output: {
        path: path.resolve(__dirname, './public/'),
        filename: 'bundle.js',
        publicPath: '/public/'
    },

    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },

    module: {
        loaders: [{
            test: /\.ts(x?)$/,
            loader: 'babel-loader?presets[]=es2015&presets[]=react!ts-loader',
            exclude: /node_modules/,
            include: path.resolve(__dirname, 'src')
        }],
    },

    plugins: [
        new CleanWebpackPlugin(['public'], {
            root: __dirname
        })
    ]
};

module.exports = config;
