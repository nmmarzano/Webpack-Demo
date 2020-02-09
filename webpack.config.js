const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            title: 'Output Management',
        }),
        new CleanWebpackPlugin(),
        new ManifestPlugin({
            publicPath: 'webpack-demo/',
            basePath: 'src/',
        }),
    ],
    entry: {
        app: './src/index.js',
        print: './src/print.js',
    },
    output: {
        filename: 'js/[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    MiniCssExtractPlugin.loader,
                ],
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|gif|svg|jpe?g|ico)$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'assets/img',
                },
            },
            {
                test: /\.(woff2?|eot|ttf|otf)$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'assets/fonts',
                },
            },
            {
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader',
                ],
            },
            {
                test: /\.xml$/,
                use: [
                    'xml-loader',
                ],
            },
        ],
    },
};