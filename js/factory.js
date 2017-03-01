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
						name: 'Four Cheese Classic',
						blurb: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
						ingredients: 'mozzarella, asiago, provalone, parmesan'
					},
					{
						name: 'Margherita Fresca',
						blurb: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
						ingredients: 'mushrooms, tomatoes, basil, olive oil'
					},
					{
						name: 'Patrick' + "'" + 's Favorite Pepperoni',
						blurb: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
						ingredients: 'pepperoni, onion, garlic, red bell pepper'
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
						name: 'Goat Cheese Special',
						blurb: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
						ingredients: 'mozzarella, chevre, chives'
					},
					{
						name: 'Super Mario Combo',
						blurb: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
						ingredients: 'mushrooms, black olives, green olives, banana peppers, onion'
					},
					{
						name: 'All The Meats',
						blurb: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
						ingredients: 'pepperoni, sausage, ham, bacon'
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
						name: 'Cow Tipper',
						blurb: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
						ingredients: 'mozzarella, feta, monterey jack'
					},
					{
						name: 'Califonia Sunrise',
						blurb: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
						ingredients: 'green bell peppers, sun-dried tomatoes, mushrooms, spinach'
					},
					{
						name: 'Hawaiian Barbecue',
						blurb: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
						ingredients: 'ham, pineapple, pepperoni, bbq sauce'
					}
				]
			}
		}
	];
	
	var filter = 'New York';

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