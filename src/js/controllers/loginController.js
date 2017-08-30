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
          var config = {
                headers : {
                    'content-type': 'application/json;charset=utf-8;'
                }
            }
          var credentials = {
            'username':$scope.username,
            'email':$scope.email,
            'password':$scope.password,
          };
          credentials = JSON.stringify(credentials);
          hugoUIService.log(credentials);
          loginService.register(credentials,config).then(function(response){
            hugoUIService.log(response);
          },function(response){
            hugoUIService.log('ERROR:');
            hugoUIService.log(response);

          });

        };
    }]);
})();
