var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/home');

	$stateProvider

	.state('home', {
		url: '/home',
		templateUrl: 'p_home.html'
	})

	.state('home.list', {
		url: '/list',
		templateUrl: 'p_home_list.html',
		controller:function($scope){
			$scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
		}

	})
	.state('home.paragraph', {
		url: '/paragraph',
		template: 'I could sure use a drink right now.'
	})

	.state('about', {
		url: '/about',
		views: {

			'': { templateUrl: 'p_about.html' },

			'columnOne@about': { template: 'Look I am a column!' },

			'columnTwo@about': { 
				templateUrl: 't_data.html',
				controller: 'scotchController'
			}
		}
		
	});

}); 


routerApp.controller('scotchController', function($scope) {
	console.log('scotchController');
	$scope.message = 'test';
	
	$scope.scotches = [
	{
		name: 'Macallan 12',
		price: 50
	},
	{
		name: 'Chivas Regal Royal Salute',
		price: 10000
	},
	{
		name: 'Glenfiddich 1937',
		price: 20000
	}
	];
	
});




