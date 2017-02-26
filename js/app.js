(function(){
var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider.when("/location", {
		templateUrl: "views/location.html",
		controller: "myCtrl"
	});
	// $routeProvider.when("/franchise2", {
	// 	templateUrl: "views/franchise2.html",
	// 	controller: "myCtrl"
	// });
	// $routeProvider.when("/franchise3", {
	// 	templateUrl: "views/franchise3.html",
	// 	controller: "myCtrl"
	// });
	$routeProvider.otherwise({
		templateUrl: "views/home.html",
		// controller: "homeCtrl"
	});
});

app.controller('myCtrl', function($scope, viewStore){
	$scope.navArray = viewStore.getNav();
	
	$scope.setLoc = function(location){
		// console.log(location);
		viewStore.setFilter(location);
		var displayView = viewStore.getView();
		console.log(displayView);

		$scope.pizzaData = displayView.pizzaData;
		console.log($scope.pizzaData);

		$scope.toggle = false;
	};

	$scope.hide = function(){
		$scope.toggle = true;
		console.log($scope.toggle);
	}




	// console.log($scope.navArray)
	// var targetView;
	
	

	// $scope.displayView = viewStore.getView();
	// console.log($scope.displayView);

	// $scope.viewAlpha = function(){
	// 	targetView = 'Alpha';
	// 	viewStore.setView(targetView);

	// 	displayView = viewStore.getView();
	// 	console.log(displayView);
	// };
	// $scope.viewBravo = function(){
	// 	targetView = 'Bravo';
	// 	console.log(targetView);
	// };
	// $scope.viewCharlie = function(){
	// 	targetView = 'Charlie';
	// 	console.log(targetView);
	// };


});

app.directive('isolate', function() {
    return {scope: true};
});



// app.controller('fr1Ctrl', function($scope, viewStore){
	
// 	console.log('whatup doe')
// 	var clickedView = "Franchise 1 was clicked!"
// 	viewStore.setView(clickedView);

// 	var displayView = viewStore.getView();
// 	console.log(displayView);

// });



app.factory('viewStore', function(){
	
	var navData = [
		{
			location: 'Alpha',
			target: '#/location'
		},
		{
			location: 'Bravo',
			target: '#/franchise2'
		},
		{
			location: 'Charlie',
			target: '#/franchise3'
		}
	];
	
	var viewData = [
		{
			location: 'Alpha',
			data: {
				city: 'New York',
				pizzaData: [
					{
						name: 'cheese',
						ingredients: 'mozzarella, chevre, provalone'
					},
					{
						name: 'veggie',
						ingredients: 'green bell peppers, sun-dried tomatoes, mushrooms, spinach, feta'
					},
					{
						name: 'meat',
						ingredients: 'pepperoni, sausage, bacon'
					}
				]
			}
		},
		{
			location: 'Bravo',
			data: {
				city: 'Chicago',
				pizzaData: ["whatup, doe?"]
			}
		},
		{
			location: 'Charlie',
			data: {
				city: 'San Francisco',
				pizzaData: ["whatup, doe?"]
			}
		}
	];
	
	var filter = '';

	return{
		
		getNav: function(){
			return navData;
		},

		// setView: function(location){
		// 	storedView = location;
		// 	console.log(storedView);
		// },

		setFilter: function(location){
			filter = location;
			console.log('The filter was set to ' + filter);
		},

		getView: function(){
			var targetData;

			viewData.forEach(function(view){
				if(view.location === filter){
					targetData = view.data;
				};					
			});

			return targetData;
			
		}
	};	

});

})();