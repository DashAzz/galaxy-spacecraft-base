const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const NODE_ENV = process.env.NODE_ENV;

const isLocalBuild = () => (NODE_ENV === 'development');
const setPath = (folderName) => path.join(__dirname, folderName);

module.exports = {
    output: {
        path: setPath('dist'),
        publicPath: '/',
        filename: isLocalBuild() ? 'js/[name].js' : 'js/[name].[hash].js'
    },

    optimization:{
        runtimeChunk: false,
        splitChunks: {
            chunks: 'all',
        }
    },

    resolve: {
        extensions: ['*', '.js', '.vue'],
        modules: [path.resolve(__dirname, 'src'), 'node_modules']
    },

    mode: isLocalBuild() ? 'development' : 'production',

    devServer: {
        historyApiFallback: true,
        noInfo: false
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/styles.[hash].css',
            chunkFilename: '[id].css'
        }),

        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"'+NODE_ENV+'"'
        }),

        new HtmlWebpackPlugin({
            filename: 'index.html',
            inject: true,
            template: setPath('/src/index.ejs'),
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true,
                html5: true,
                minifyCSS: true,
                removeComments: true,
                removeEmptyAttributes: true
            }
        })
    ],

    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        js: 'babel-loader'
                    }
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
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
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.scss$/,
                use: !isLocalBuild() ?
                    [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'] :
                    ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
};
