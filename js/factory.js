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
				myStyle: {
						'postion' : "absolute",
						'background-color' : '#42423D',
						'background' : "linear-gradient(to right, rgba(106, 106, 98, .3), rgba(106, 106, 98, .3)), url('../img/empire-state.jpg')",
						'min-height' : "490px",
						'background-attachment' : "fixed",
						'background-position' : "center",
						'background-repeat' : "no-repeat",
						'background-size' : "cover"
					},
				pizzaData: [
					{
						name: 'cheese1',
						blurb: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
						ingredients: 'mozzarella, chevre, provalone'
					},
					{
						name: 'veggie1',
						blurb: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
						ingredients: 'green bell peppers, sun-dried tomatoes, mushrooms, spinach, feta'
					},
					{
						name: 'meat1',
						blurb: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
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
				blurb: 'Empire State is the original Brick Oven Pizza Co franchise. Our founder, Giuseppe Giacosa, believed the best pizza came from top notch ingredients and a little Sicilian know-how. Millions of satisfied customers later, his legacy lives on.',
				date: '1963',
				myStyle: {
						'postion' : "relative",
						'background-color' : '#42423D',
						'background' : "linear-gradient(to right, rgba(106, 106, 98, .3), rgba(106, 106, 98, .3)), url('../img/windy-city.jpg')",
						'min-height' : "490px",
						'background-attachment' : "fixed",
						'background-position' : "center",
						'background-repeat' : "no-repeat",
						'background-size' : "cover"
					},
				pizzaData: [
					{
						name: 'cheese2',
						blurb: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
						ingredients: 'mozzarella, chevre, provalone'
					},
					{
						name: 'veggie2',
						blurb: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
						ingredients: 'green bell peppers, sun-dried tomatoes, mushrooms, spinach, feta'
					},
					{
						name: 'meat2',
						blurb: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
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
				blurb: 'Empire State is the original Brick Oven Pizza Co franchise. Our founder, Giuseppe Giacosa, believed the best pizza came from top notch ingredients and a little Sicilian know-how. Millions of satisfied customers later, his legacy lives on.',
				date: '1969',
				myStyle: {
						'postion' : "relative",
						'background-color' : '#42423D',
						'background' : "linear-gradient(to right, rgba(106, 106, 98, .3), rgba(106, 106, 98, .3)), url('../img/golden-gate.jpg')",
						'min-height' : "490px",
						'background-attachment' : "fixed",
						'background-position' : "center",
						'background-repeat' : "no-repeat",
						'background-size' : "cover"
					},
				pizzaData: [
					{
						name: 'cheese3',
						blurb: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
						ingredients: 'mozzarella, chevre, provalone'
					},
					{
						name: 'veggie3',
						blurb: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
						ingredients: 'green bell peppers, sun-dried tomatoes, mushrooms, spinach, feta'
					},
					{
						name: 'meat3',
						blurb: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
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