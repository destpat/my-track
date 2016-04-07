// MAIN CONTROLLER
function mainController($scope, $location, todoService) {
	$scope.title = "Todo List";
	$scope.myTxt = "hello all people and welcom ";

	function load(){
		todoService.get().then(function(res){
			$scope.todos = res.data;
		});
	}
	$scope.add = function(){
		var data = {};
		data.description = $scope.description;
		todoService.create(data).then(function(res){
			load();
		});
		$scope.description = "";

	},
	$scope.search = function(ville) {
			var data = {};
			$location.path('/meteo').search({ville});
	},
	$scope.update = function(todo){
		todoService.update(todo._id, todo).then(function(res){
			load();
		});
	},
	$scope.delete = function(todo){
		todoService.delete(todo._id).then(function(res){
			load();
		});
	},
	load();
}
