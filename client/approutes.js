angular.module('ChooseForMe', [
	'ChooseForMe.home', 
	'ngRoute'
	])
	.config(function($routeProvider, $httpProvider){
		$routeProvider
			.when('/home', {
				templateUrl: '/home.html',
				controller: 'homeController'
			})
			.otherwise({
				redirectTo: '/home'
			})
	})