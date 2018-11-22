const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: __dirname+'/public',
        filename: './app.js'
    },
    devServer: {
        port: 8088,
        contentBase: './public'
    },
    resolve: {
        extensions: ['','.js','.jsx'],
        alias:{
            modules: __dirname+'/node_modules'     
        }
    },
    plugins: [
        new ExtractTextPlugin('app.cs')
    ],
    module: {
        loaders: [{
            text:/.jsx[x]?$/,
            loader: 'babel-loader',
            exclude: '/node-modules/',
            query: {
                presets: ['es2015','react'],
                plugins: ['transform-object-rest-spread']
            }

        }, {
            test: /\.css$/,
            loader:ExtractTextPlugin.extract('style-loader','css-loader')
        }, {
            test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
            loader: 'file'
        }]
        
    }
        
    
}