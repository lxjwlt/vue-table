var path = require('path');
var webpack = require('webpack');

module.exports = {
    resolve: {
        alias: {
            src: path.resolve(__dirname, './src')
        }
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['es2015'],
                    plugins: ['transform-runtime', 'add-module-exports']
                }
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"development"'
            }
        })
    ],
    devServer: {
        contentBase: path.resolve(__dirname, './test'),
        noInfo: true
    },
    devtool: 'inline-source-map'
};
