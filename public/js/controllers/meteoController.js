function meteoController($scope, $routeParams, $http) {

  // $scope.weather = $scope.ville = $routeParams.ville
  url = "http://api.openweathermap.org/data/2.5/weather?q="+$routeParams.ville+"&appid=daaef6850429a01166978bab823c79f3"
  $http.get(url).success(function(response) {
    $scope.weather = response;

  })
}
