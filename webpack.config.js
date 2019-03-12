const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const webpack = require('webpack')
const devMode = process.env.NODE_ENV != 'production'
module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: './js/[name].[hash:8].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: './css/[name].[hash:8].css'
        })
    ],
    module: {
        rules: [{
                test: /\.(jsx|js)$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: /node_modules/
            },
            {
                test: /.css$/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        name: './imgs/[name].[hash:8].[ext]',
                        limit: 500
                    }
                }]
            }, {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }, {
                test: /\.(html|htm)$/i,
                use: ['html-withimg-loader']
            }
        ]
    }
}