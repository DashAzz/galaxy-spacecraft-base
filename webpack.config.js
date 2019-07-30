const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [ 'babel-polyfill', path.resolve(__dirname, 'src/index.js') ],

    devServer: {
        port: 8000,
        https: true,
        proxy: {
            '/api': {
                target: 'https://swapi.co',
                pathRewrite: { '^/api': '' },
                changeOrigin: true,
                secure: false
            }
        }
    },

    resolve: {
        extensions: [ '*', '.js', '.vue' ],
        modules: [ path.resolve(__dirname, 'src'), 'node_modules' ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            inject: true,
            template: path.resolve(__dirname, 'src/index.ejs')
        })
    ],

    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: { js: 'babel-loader' }
                }
            },

            {
                test: /\.pug$/,
                loaders: [
                    'apply-loader',
                    {
                        loader: 'pug-loader',
                        options: { pretty: true }
                    }
                ]
            },

            {
                test: /\.scss$/,
                use: ['css-loader', 'sass-loader']
            }
        ]
    }
};
