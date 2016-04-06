function config($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/main.html',
			controller: 'mainController'
		})
		.when('/main', {
			templateUrl: 'views/main.html',
			controller: 'mainController'
		})
		.when('/acceuil', {
			templateUrl: 'views/acceuil.html'
		})
		.when('/meteo', {
			// url:'/meteo/:ville',
			templateUrl: 'views/meteo.html',
			controller:'meteoController'
		})
		.otherwise({
			redirectTo: '/'
		});
}
function run($rootScope, $location){
	var path = function() { return $location.path(); };
	$rootScope.$watch(path, function(newVal, oldVal){
		$rootScope.activetab = newVal;
	});
}
angular.module('app', ['ngRoute'])
    .config(config)
    .controller('mainController', mainController)
		.controller('meteoController', meteoController)
    .service('todoService', todoService)
    /*.factory('', )*/
    .run(run);
