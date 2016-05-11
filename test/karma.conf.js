// Reference: http://karma-runner.github.io/0.12/config/configuration-file.html

var ENV = process.env.npm_lifecycle_event;

var isWatching	= ENV === 'test-watch',
	isCoverage	= ENV === 'test-coverage';

module.exports = function karmaConfig (config) {
	var options = {};

	options.frameworks	= [ 'jasmine' ];
	options.browsers	= [ 'PhantomJS' ];
	options.singleRun	= !isWatching;
	options.reporters	= [ 'progress' ];
	if(isCoverage) {
		options.reporters.push('coverage');
	}


	// Files
	options.files = [
		'./index.webpack.js'
	];

	// Preprocessors
	options.preprocessors = {
		'./index.webpack.js': ['webpack', 'sourcemap']
	};

	// Coverage
	options.coverageReporter = {
		dir: 'coverage/',
		reporters: [
			{type: 'text-summary'},
			{type: 'html'}
		]
	};

	// Webpack
	options.webpack = require('../webpack.config');
	options.webpackMiddleware = {
		noInfo: 'errors-only'
	};

	config.set(options);
};
