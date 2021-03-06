var sharedConfig = require('./karma-shared.conf');

module.exports = function(config) {
    sharedConfig(config, {testName: 'ngImprovedModule: AngularJS 1.2.x', logFile: 'karma-angular-1.2.log'});

    config.set({

        // list of files / patterns to load in the browser
        files: [
            'bower_components/angular-1.2/angular.js',
            'bower_components/angular-mocks-1.2/angular-mocks.js',
            'src/**/module.js',
            'src/**/*.js',
            'test/**/*.js'
        ]

    });
};
