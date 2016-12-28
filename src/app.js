global._ = require('lodash');
let angular = require('angular');

require('angular-simple-logger');
require('angular-google-maps');
require('angular-ui-router');

let routes = require('./routes');

// Require issues
require('./issues');

const dependencies = [
	'uiGmapgoogle-maps',
	'ui.router',
	'issues'
];

let app = angular.module('app', dependencies);

app.config(routes);
