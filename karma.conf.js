var webpack = require('webpack');

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['mocha'],
        files: [
            'src/**/*.spec.ts'
        ],

        preprocessors: {
            'src/**/*.ts': ['typescript']
        },

        reporters: ['spec'],

        webpack: {
            devtool: 'inline-source-map',
            module: {
                loaders: [{
                    test: /\.ts(x?)$/,
                    loader: 'babel-loader?presets[]=es2015&presets[]=react!ts-loader',
                    exclude: /node_modules/
                }]
            },
            plugins: [
                new webpack.DefinePlugin({
                    '__DEV__': true,
                    'process.env': {
                        'NODE_ENV': JSON.stringify('development')
                    }
                })
            ],
            externals: {
                'react/addons': true,
                'react/lib/ExecutionEnvironment': true,
                'react/lib/ReactContext': true
            }
        },

        webpackServer: {
            noInfo: true
        },

        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS'],
        singleRun: false
    });
};
