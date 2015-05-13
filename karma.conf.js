// this file is the cofiguration file used with `gulp-karma`

var gutil = require('gulp-util');
var karmaPort = 9876;

module.exports = function (config) {
  config.set({
    frameworks: ['jasmine'],
    browsers: ['PhantomJS'],
    // coverage reporter generates the coverage
    reporters: ['progress', 'coverage'],

    preprocessors: {
      // source files, that you wanna generate coverage for
      // do not include tests or libraries
      // (these files will be instrumented by Istanbul)
      'app/modules/**/*.js': ['coverage'],
      // To make directive avaiable to the testing without making server call
      //NOte: this don't forget to include same html file in gulp task.
      'app/modules/**/*.html': ['ng-html2js']
    },

    ngHtml2JsPreprocessor: {
      stripPrefix: 'app/',
      // ADDED THIS: the name of the Angular module to create
      moduleName: "my.templates"
    },
    action: 'run',
    //reporters: ['dots', 'junit'],
    singleRun: true,
    port: karmaPort++,

    plugins : [
      'karma-phantomjs-launcher',
      'karma-jasmine',
      'karma-coverage',
      'karma-ng-html2js-preprocessor'
    ],

    // optionally, configure the reporter
    coverageReporter: {
      type: 'html',
      dir: 'test/coverage/'
    },
    // logLevel for debugging purpose..
    //logLevel: config.LOG_DEBUG,
    colors: !gutil.env.ci
  });

}

