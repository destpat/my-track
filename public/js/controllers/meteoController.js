function meteoController($scope, $route, $http) {

  $scope.ville = $route.current.params;
  url = "api.openweathermap.org/data/2.5/weather?q="+ $route.current.params
  api.openweathermap.org/data/2.5/weather?q={city name}

}
