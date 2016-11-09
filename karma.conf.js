module.exports = function(config) {
    config.set({


    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [

        'public/javascripts/libs/jquery-1.11.1.min.js',
        'public/javascripts/libs/angular.min.js',
        'karma/angular-mocks.js',
        //Creating modules
        'karma/code/*',
        //'public/javascripts/templates/*',
        //loading tests
        //'test/spec/**/*.js'
        'karma/spec/test-comment.js'

    ],


    // list of files to exclude
    exclude: [
        //'app/bower_components/**/*.min.js'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_DEBUG,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Firefox', 'Chrome'],

    //not sure if it's needed
    plugins: [
        'karma-jasmine',
        'karma-coverage',
       // 'karma-junit-reporter',
        'karma-chrome-launcher',
        'karma-firefox-launcher'
    ],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    // Also good when trying to set up Karma correctly, to avoid multiplication of browsers
    singleRun: false
    });
};

