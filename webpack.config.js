/* global __dirname */
var webpack = require("webpack");
var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = require('./config.js');

module.exports = {
    entry: {
        bundle: "./src/index.js",
    },
    resolve: {
        extensions: ["", ".js", ".jsx", ".css", ".scss"]
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name].js",
    },
    devServer: {
        outputPath: path.join(__dirname, 'dist')
    },
    module: {
        loaders: [
            {
                test: /\.scss|\.css$/,
                loader: "style!css!sass"
            },
            {
                test: /\.js/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel",
                query: {
                    presets: ["es2015"]
                }
            },
            {
                test: /\.png|\.svg|\.jpg$/,
                loader: "url-loader",
                query: {
                    limit: 100000 //100 kb
                }
            },
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            __DEVELOPMENT__: JSON.stringify(JSON.parse(config.node_env === 'development'))
        }),
        new HtmlWebpackPlugin({
            title: 'CFP companion app',
            appMountId: 'app',
            inject: false,
            template: './assets/index.html'
        })
    ]
}
