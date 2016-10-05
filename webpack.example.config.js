var path = require('path');
var webpack = require('webpack');

var config = {
    entry: './examples/test/app.js',
    output: {
        path: path.resolve(__dirname, './examples'),
        publicPath: '/examples/',
        filename: 'app.build.js'
    },
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
            },
            {
                test: /\.html$/,
                loader: 'raw'
            },
            {
                test: /\.css$/,
                loader: 'style!css?sourceMap'
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
            }
        })
    ],
    devtool: 'source-map'
};

if (process.env.NODE_ENV === 'production') {
    delete config.devtool;
}

module.exports = config;