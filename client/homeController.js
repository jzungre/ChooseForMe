angular.module('ChooseForMe.home', [])

.controller('homeController', function ($scope, $http, $window) {

	$scope.item;

	$scope.submit = function(){
		
		console.log($scope.item);

	}

	


})