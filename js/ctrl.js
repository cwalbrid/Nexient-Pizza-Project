(function(){
var app = angular.module('myApp');

app.controller('myCtrl', function($scope, viewStore){
	$scope.navArray = viewStore.getNav();
	
	$scope.display = viewStore.getView();

	$scope.setLoc = function(location){
		
		viewStore.setFilter(location);
		
		var displayView = viewStore.getView();
		
		$scope.display = displayView;
		console.log($scope.display)

		$scope.toggle = false;

	};

	$scope.hide = function(){
		$scope.toggle = true;
		console.log($scope.toggle);
	}

});


app.directive('isolate', function() {
    return {scope: true};
});


app.directive('pizza', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/pizza.html'
  };
});

})();