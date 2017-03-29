var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var develop = true;

var config = {
    entry: {
        bundle: (() => {
            var bundleFiles = [
                './src/main.js'
            ];
            if (!develop) {
                bundleFiles.push('./src/serviceWorker/serviceWorkerInit.js');
            }
            return bundleFiles;
        })()
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
                bypass: (req, res, opt) => {
                    if(req.path.indexOf('/sw.js') !== -1 ||
                        req.path.indexOf('/img') !== -1 ||
                        req.path.indexOf('/data') !== -1 ||
                        req.path.indexOf('/build') !== -1 ||
                        req.path.indexOf('/favicon') !== -1){
                        return req.path;
                    }

                    if (req.headers.accept.indexOf('html') !== -1) {
                        return '/index.html';
                    }
                }
            }
        ]
    },

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
        }),/*
        new webpack.DefinePlugin({ // <-- key to reducing React's size
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin(), //minify everything
        new webpack.optimize.AggressiveMergingPlugin()//Merge chunks*/
    ]
};

module.exports = config;