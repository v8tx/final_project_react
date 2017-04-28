var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/client/src/app/index.html',
    filename: 'index.html',
    inject: 'body'
});
var BUILD_DIR = path.resolve(__dirname, 'client/src/public');
var APP_DIR = path.resolve(__dirname, 'client/src/app');

var config = {
    entry: {
        javascript: APP_DIR + '/index.js',
    },
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js',
    },
    module: {
        loaders: [{
            test: /\.js?/,
            include: APP_DIR,
            loaders: ['react-hot-loader', 'babel-loader']
        }, {
            test: /\.scss$/,
            loaders: ['style-loader', 'css-loader', 'sass-loader']
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: ['babel-loader', 'eslint-loader']
        },
        { test: /\.css$/, loader: 'style-loader!css-loader'} ]
    },
    plugins: [new webpack.LoaderOptionsPlugin({
            options: {
                eslint: {
                    /* your eslint loader config */
                    
                }
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('development')
            }
        }),
        HTMLWebpackPluginConfig
    ],
    devtool: 'eval-source-map', // shows file messages;
};

module.exports = config;
