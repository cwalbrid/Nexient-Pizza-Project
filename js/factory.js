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
				blurb: 'Empire State is the original Brick Oven Pizza Company. Giuseppe Giacosa dreamt of a neighborhood pizzeria where ordinary folks could gather to share delicious food and enjoy one another\'s company. As word spread about the restaurant, customers came from miles around to experience the Best Pizza in the Borough.',
				date: '1952',
				phone:'(718) 599-2211',
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
						blurb: 'A signature blend of cheeses that will make your mouth water',
						ingredients: 'mozzarella, asiago, feta, parmesan'
					},
					{
						name: 'Margherita Fresca',
						blurb: 'A lighter, health-conscious pie packed with fresh flavor',
						ingredients: 'mushrooms, tomatoes, basil, olive oil'
					},
					{
						name: 'Patrick\'s Favorite Pepperoni',
						blurb: 'A unique pepperoni recipe invented by Giuseppe\’s childhood friend, Patrick Callahan',
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
				blurb: 'Giuseppe founded the Windy City Brick Oven Pizza franchise when his High School Sweetheart, Loretta Simmons, moved to Chicago to pursue a career as a blues singer. Chicagoans fell in love with Brick Oven Pizza\’s signature style, and Giuseppe married Loretta in 1964.',
				date: '1963',
				phone:'(773) 525-4582',
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
						blurb: 'A distinct goat cheese pizza made with Wisconsin Chevre',
						ingredients: 'mozzarella, chevre, chives'
					},
					{
						name: 'Super Mario Combo',
						blurb: 'A veggie pie inspired by Giuseppe\’s cousin, Mario, who loved to eat olives from the can',
						ingredients: 'mushrooms, black olives, green olives, banana peppers, onion'
					},
					{
						name: 'All The Meats',
						blurb: 'A hearty classic for the discerning carnivore',
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
				blurb: 'Giuseppe and Loretta Giacosa yearned to see the West Coast, and established the Golden Gate Brick Oven Pizza franchise during San Francisco\’s Summer of Love. Mobs of Flower Children swarmed the pizzeria, and it became a favorite spot for local musicians, poets, and artists to exhibit their work and perform.',
				date: '1967',
				phone:'(415) 668-5587',
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
						blurb: 'An all-cheese favorite crafted with locally-sourced ingredients',
						ingredients: 'mozzarella, provalone, monterey jack'
					},
					{
						name: 'California Sunrise',
						blurb: 'A bright, slightly acidic veggie pie that is sure to satisfy',
						ingredients: 'green bell peppers, sun-dried tomatoes, mushrooms, spinach'
					},
					{
						name: 'Hawaiian Barbecue',
						blurb: 'A sweet and savory Hawaiian recipe with a tangy kick',
						ingredients: 'ham, pineapple, pepperoni, bbq sauce'
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