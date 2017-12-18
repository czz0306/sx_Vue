const path = require('path');
const webpack = require('webpack');
module.exports = {
    entry: {
        bundle: './main.js'
    },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.js/,
                use: 'babel-loader'
            },
            {
                test: /\.(ttf|woff|svg|eot|jpg|png|gif)$/,
                use: 'file-loader'
            }
        ]
    },
    devServer: {
        open: true,
        port: 8888,
        inline: true,
        historyApiFallback: true,
        noInfo: true,
        hot: true
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': path.resolve(__dirname, './src')
        },
        extensions: ['.js', '.vue']
    },
    devtool: 'eval-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};