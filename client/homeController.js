angular.module('ChooseForMe.home', [])

.controller('homeController', function ($scope, $http, $window) {

	$scope.item;
	$scope.list = [];
	$scope.chosen;

	$scope.submit = function($event){
		
	$event.preventDefault();
    
    // may be an ajax request
    $scope.list.push($scope.item)
	console.log("in subb with: ", $scope.item);
	$scope.item ='';

    return false;
		// event.preventDefault()
	}

	$scope.choose = function(){
		
		$scope.chosen = undefined;
		var rando = Math.floor((Math.random() * $scope.list.length -1) + 1)
		console.log('rando!',rando);
		$scope.chosen = $scope.list[rando];
		
	}
})