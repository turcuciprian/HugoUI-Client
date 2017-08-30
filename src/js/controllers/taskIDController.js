(function() {
    app.controller('taskIDController', ['$scope','$http', function($scope,$http) {
        $http.get('http://localhost:8888/HugoUIServer/generateTaskID').then(function(result){
          $scope.taskID = result.data.ID;
        });
    }]);
})();
