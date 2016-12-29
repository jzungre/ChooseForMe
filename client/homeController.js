angular.module('ChooseForMe.home', [])

.controller('homeController', function ($scope, $http, $window) {

	$scope.item;
	$scope.list = [];

	$scope.submit = function($event){
		
	$event.preventDefault();
    
    // may be an ajax request
    $scope.list.push($scope.item)
	console.log("in subb with: ", $scope.item);
	$scope.item ='';

    return false;
		// event.preventDefault()
	}
})