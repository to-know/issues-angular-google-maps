let angular = require('angular');

let config     = require('./issue-config');
let controller = require('./issue-controller');
let template   = require('html!./issue-template.html');

angular
.module('issues')
.component('issue1040', {
	template: template,
	controller: controller
})
.config(config);