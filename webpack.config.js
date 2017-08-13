var webpack = require('webpack');
var path = require('path');

var PUBLIC_DIR = path.resolve(__dirname, 'src/public');
var BUILD_DIR = path.resolve(__dirname, 'src/build'); 

var config = {
    entry: [
        BUILD_DIR + '/main.jsx'
    ],
    output: {
        path: PUBLIC_DIR,
        publicPath: '/public/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                include: BUILD_DIR,
                loader: 'babel-loader',
                query: { presets:['es2015','react'] } 
            }
        ],
    },
    watch: true
};

module.exports = config;