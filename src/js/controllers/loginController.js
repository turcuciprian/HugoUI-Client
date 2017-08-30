(function() {
    app.controller('loginController', ['$scope', '$http', function($scope, $http) {
        // $http.get('http://localhost:8888/HugoUIServer/generateTaskID').then(function(result){
        //   $scope.taskID = result.data.ID;
        // });
        $scope.username = '';
        $scope.password = '';
        $scope.loginClick = function() {
          console.log($scope.username+'-'+$scope.password);

        };
    }]);
})();
