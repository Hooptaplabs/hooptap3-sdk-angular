// This file is an entry point for angular tests
// Avoids some weird issues when using webpack + angular.

var angular = require('angular');
require('angular-mocks');

window.inject		= angular.mock.inject;
window.mockModule	= angular.mock.module;

require('../src/index.js');

var testsContext = require.context("../src", true, /\.spec$/);
testsContext.keys().forEach(testsContext);