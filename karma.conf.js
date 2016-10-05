module.exports = function (config) {
    config.set({

        basePath: '',

        frameworks: ['jasmine'],

        browsers: ['Chrome'],

        files: [
            'test/specs/index.js'
        ],

        preprocessors: {
            'src/**/*.js': ['coverage'],
            'test/specs/index.js': ['webpack', 'sourcemap']
        },

        webpack: require('./webpack.test.config'),

        webpackMiddleware: {
            stats: 'errors-only',
            noInfo: true
        },

        reporters: ['mocha', 'coverage'],

        port: 9876,

        logLevel: config.LOG_INFO,

        singleRun: false
    });
};
