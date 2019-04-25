import webpackConfig from './webpack.config.js';
mode = 'production';

export default function (config) {
  config.set({
    singleRun: true,

    browsers: [
      'PhantomJS'
    ],

    frameworks: [
      'jasmine'
    ],

    files: [
      'spec.bundle.js'
    ],

    preprocessors: {
      'spec.bundle.js': ['webpack']
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      stats: 'errors-only'
    },

    plugins: [
      require('karma-jasmine'),
      require('karma-phantomjs-launcher'),
      require('karma-webpack')
    ]
  });
};