let angular = require('angular');

let mapConfig = require('./config');
let mapCtrl = require('./map-ctrl');
let mapTpl = require('html!./map-template.html');

angular
.module('issues')
.component('issue543', {
	template: mapTpl,
	controller: mapCtrl
})
.config(mapConfig);