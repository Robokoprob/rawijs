var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

var config = {
    entry: {
        bundle: ['./src/main.js', './src/serviceWorker/serviceWorkerInit.js']
    },

    output: {
        path:(()=> { return '/build' })(),
        filename: '[name].js',
        publicPath: "/build"
    },

    devServer: {
        inline: true,
        port: 8082,
        proxy: [
            {
                path: ['/**'],
                target: '/index.html',
                secure: false,
                bypass: function(req, res, opt){
                    if(req.path.indexOf('/img/') !== -1 || req.path.indexOf('/data/') !== -1 || req.path.indexOf('/build/') !== -1){
                        return req.path;
                    }

                    if (req.headers.accept.indexOf('html') !== -1) {
                        return '/index.html';
                    }
                }
            }
        ]
    },

    // devtool: 'eval',
    // devtool: 'inline-source-map',
    // debug: true,

    resolve: {
        modules: [
            path.resolve('./src'),
            path.resolve('./node_modules')
        ]
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015', 'react']
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader?modules&localIdentName=[name]__[local]__[hash:base64:5]'
                ]
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        "css-loader?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]",
                        "sass-loader"
                    ]
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: "styles.css",
            disable: false,
            allChunks: true
        })
    ]
};

module.exports = config;