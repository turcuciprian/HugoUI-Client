(function() {
    app.controller('loginController', ['$scope', '$http','loginService','hugoUIService', function($scope, $http,loginService,hugoUIService) {
        // $http.get('http://localhost:8888/HugoUIServer/generateTaskID').then(function(result){
        //   $scope.taskID = result.data.ID;
        // });
        $scope.username = '';
        $scope.password = '';
        $scope.loginClick = function() {
          var credentials = {
            'username':$scope.username,
            'password':$scope.password,
          }
          loginService.login(credentials);
        };
        $scope.registerClick = function(){
          var credentials = {
            'username':$scope.username,
            'password':$scope.password,
          }
          hugoUIService.log(credentials);
          loginService.register(credentials).then(function(response){
            hugoUIService.log(response);
          });

        };
    }]);
})();
