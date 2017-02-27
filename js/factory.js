var app = angular.module('myApp');

app.factory('viewStore', function(){
	
	var navData = [
		{
			location: 'New York'
		},
		{
			location: 'Chicago'
		},
		{
			location: 'San Francisco'
		}
	];
	
	var viewData = [
		{
			location: 'New York',
			data: {
				franchise: 'Empire State',
				city: 'New York',
				blurb: 'Empire State is the original Brick Oven Pizza Co franchise. Our founder, Giuseppe Giacosa, believed the best pizza came from top notch ingredients and a little Sicilian know-how. Millions of satisfied customers later, his legacy lives on.',
				date: '1952',
				pizzaData: [
					{
						name: 'cheese1',
						blurb: 'This pizza is sooo good!',
						ingredients: 'mozzarella, chevre, provalone'
					},
					{
						name: 'veggie1',
						blurb: 'This pizza is sooo good!',
						ingredients: 'green bell peppers, sun-dried tomatoes, mushrooms, spinach, feta'
					},
					{
						name: 'meat1',
						blurb: 'This pizza is sooo good!',
						ingredients: 'pepperoni, sausage, bacon'
					}
				]
			}
		},
		{
			location: 'Chicago',
			data: {
				franchise: 'Windy City',
				city: 'Chicago',
				blurb: '',
				date: '1963',
				pizzaData: [
					{
						name: 'cheese2',
						blurb: 'This pizza is sooo good!',
						ingredients: 'mozzarella, chevre, provalone'
					},
					{
						name: 'veggie2',
						blurb: 'This pizza is sooo good!',
						ingredients: 'green bell peppers, sun-dried tomatoes, mushrooms, spinach, feta'
					},
					{
						name: 'meat2',
						blurb: 'This pizza is sooo good!',
						ingredients: 'pepperoni, sausage, bacon'
					}
				]
			}
		},
		{
			location: 'San Francisco',
			data: {
				franchise: 'Golden Gate',
				city: 'San Francisco',
				blurb: '',
				date: '1969',
				pizzaData: [
					{
						name: 'cheese3',
						blurb: 'This pizza is sooo good!',
						ingredients: 'mozzarella, chevre, provalone'
					},
					{
						name: 'veggie3',
						blurb: 'This pizza is sooo good!',
						ingredients: 'green bell peppers, sun-dried tomatoes, mushrooms, spinach, feta'
					},
					{
						name: 'meat3',
						blurb: 'This pizza is sooo good!',
						ingredients: 'pepperoni, sausage, bacon'
					}
				]
			}
		}
	];
	
	var filter = '';

	return{
		
		getNav: function(){
			return navData;
		},

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