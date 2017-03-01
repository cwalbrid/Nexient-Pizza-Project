(function(){
var app = angular.module('myApp');

app.controller('myCtrl', function($scope, viewStore){
	
	// BINDS NAV DATA TO $SCOPE
	$scope.navArray = viewStore.getNav();

	$scope.setLoc = function(location){
		
		// SETS FILTER KEYWORD
		viewStore.setFilter(location);

		// BINDS FILTERED VIEW DATA TO $SCOPE
		$scope.display = viewStore.getView();

		$scope.toggle = false;

	};

	$scope.hide = function(){
		$scope.toggle = true;
	}

});


app.directive('isolate', function() {
    return {scope: true};
});

// PIZZA DIRECTIVE
app.directive('pizza', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/pizza.html'
  };
});

})();