const path = require('path');
const htmlWebpackplugin = require('html-webpack-plugin');
const reactRefreshWebpackplugin = require('@pmmmwh/react-refresh-webpack-plugin')

const isDevelement = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: isDevelement ? 'development': 'production',

    devtool: isDevelement ? 'eval-source-map': 'source-map',

    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },

    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        hot: true,
    },

    plugins: [
        isDevelement && new reactRefreshWebpackplugin(),
        new htmlWebpackplugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ].filter(Boolean),
    module: {
        rules: [
            {
                test: /\.(j|t)sx$/,
                exclude: /node_modules/,
                use: {
                    loader:'babel-loader',
                    options:{
                        plugins:[
                            isDevelement && require.resolve('react-refresh/babel')
                        ].filter(Boolean),
                    }
                },
                
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }

        ],
    }
};
