var path = require('path');
const webpack = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

var entries = {};

entries.app = ["./src/index.tsx"];

module.exports = {
    entry: entries,
    module: {
        rules: [
            {
                test: /\.raw.cpp$/i,
                use: 'raw-loader',
            },
            {
                test: /.bdf$/,
                use: 'raw-loader',
                exclude: /node_modules/,
                include: /src/
            },
            {
                test: /.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
                include: /src/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].bundle.min.js"
    },
    devtool: "eval",
    devServer: {
        contentBase: "dist/",
        port: 4444,
        // proxy: {
        //     '/api': {
        //         target: 'http://localhost:8080/api/',
        //         secure: false
        //     }
        // }
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: 'src/package.json',
                    to: 'package.json' // inside dist/
                }
            ]
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        })
    ]
    // , //   // https://stackoverflow.com/questions/39249237/node-cannot-find-module-fs-when-using-webpack
    // node: {
    //     fs: 'empty'
    // }
};
