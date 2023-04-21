'use strict'

const path = require('path')
const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
				compress: true,
				port: 80,
    },
    entry: {
        index: './src/index.js'
    },
    mode: 'development',
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                {loader: 'style-loader'},
                {loader: 'css-loader'},
                {loader: 'postcss-loader', 
                    options: {
                        postcssOptions: {
                            plugins: () => [
                                autoprefixer
                            ]
                        }
                    }
                },
                {loader: 'sass-loader'}
            ]
        }, {
            test: /\.js$/,
            use: ['babel-loader']
        }]
    },
    output: {
        filename: '[name].min.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './dist/index.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'falcon9.html',
            template: './dist/falcon9.html',
            chunks: ['index']
        })
    ]
}