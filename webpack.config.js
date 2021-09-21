const path = require('path');
const htmlWebpackplugin = require('html-webpack-plugin');

const isDevelement = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: isDevelement ? 'development': 'production',

    devtool: isDevelement ? 'eval-source-map': 'source-map',

    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },

    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
    },

    plugins: [
        new htmlWebpackplugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ],
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }

        ],
    }
};
