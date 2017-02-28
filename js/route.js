var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider.when("/location", {
		templateUrl: "views/location.html",
		controller: "myCtrl"
	});

	$routeProvider.otherwise({
		templateUrl: "views/home.html"
		// controller: "myCtrl"
	});
});