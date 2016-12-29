let routes = ($stateProvider) => {
	$stateProvider

	.state('issues', {
		abstract: true,
		template: '<ui-view />'
	})
	.state('issues.all', {
		url: '',
		template: require('html!./issues.html')
	})
	.state('issues.543', {
		url: '/issues-543',
		template: require('html!./issues-543.html')
	})
	.state('issues.1040', {
		url: '/issues-1040',
		template: require('html!./issues-1040.html')
	})
}

routes.$inject = ['$stateProvider'];
module.exports = routes;