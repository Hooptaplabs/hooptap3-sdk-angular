'use strict';

// Modules
var webpack				= require('webpack');

// Identify the environment
var ENV = process.env.npm_lifecycle_event;
var isTest = ENV === 'test' || ENV === 'test-watch' || ENV === 'test-coverage';
var isProd = ENV === 'build' || ENV === '';
var isWatching	= ENV === 'test-watch' || ENV === 'serve';

module.exports = function makeWebpackConfig () {

	var config = {};


	// Entrysrc

	config.entry = {};

	if(!isTest) {
		config.entry.app = './index.js';
	}


	// Output

	config.output = isTest ? {} : {
		// Absolute output directory
		path: __dirname + '/build',

		// Output path from the view of the page
		// Uses webpack-dev-server in development
		publicPath: isProd ? '/' : 'http://localhost:8080/',

		// Filename for entry points
		filename: 'hooptap-sdk-angular.js'
	};


	// Devtool

	if (isTest) {
		config.devtool = isWatching ? '' : 'inline-source-map';
	} else if (isProd) {
		config.devtool = ENV === 'build-sourcemap' ? 'cheap-module-eval-source-map' : '';
	} else {
		config.devtool = '#eval-source-map';
	}


	// Loaders

	config.module = {
		preLoaders: [],
		loaders: [

		]
	};

	// Coverage Reporter (ISPARTA)

	if (isTest) {
		config.module.preLoaders.push({
			test: /\.js$/,
			exclude: [
				/node_modules/,
				/\.spec\.js$/
			],
			loader: 'isparta-instrumenter'
		})
	}


	// Resolve

	config.resolve = {
		modulesDirectories : [
			'node_modules'
		]
	};


	// Plugins

	config.plugins = [];

	if(isProd) {
		config.plugins.push(

			// Only emit files when there are no errors
			new webpack.NoErrorsPlugin(),

			// Dedupe modules in the output
			new webpack.optimize.DedupePlugin()

			// Minify all javascript, switch loaders to minimizing mode
			//new webpack.optimize.UglifyJsPlugin({
			//	sourceMap	: false,
			//	compress: {
			//		warnings	: false
			//	}
			//})

		);
	}



	// Devserver

	config.devServer = {
		contentBase	: './build_starter',
		stats		: 'minimal'
	};



	// Stats

	config.stats = {
		children: false
	};


	return config;
}();
