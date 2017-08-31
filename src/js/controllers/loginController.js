(function() {
    app.controller('loginController', ['$scope', '$http', 'loginService', 'hugoUIService', 'ngNotify', function($scope, $http, loginService, hugoUIService, ngNotify) {
        // $http.get('http://localhost:8888/HugoUIServer/generateTaskID').then(function(result){
        //   $scope.taskID = result.data.ID;
        // });
        $scope.username = '';
        $scope.password = '';
        $scope.passwordagain = '';
        $scope.loginClick = function() {
            var credentials = {
                'username': $scope.username,
                'password': $scope.password,
            }
            if ($scope.password == $scope.passwordagain) {
                loginService.login(credentials);
            } else {
                hugoUIService.log('passwords do not match');
            }
        };
        $scope.registerClick = function() {
            var config = {
                headers: {
                    'content-type': 'application/json;charset=utf-8;'
                }
            }
            var credentials = {
                'username': $scope.username,
                'email': $scope.email,
                'password': $scope.password,
            };
            credentials = JSON.stringify(credentials);
            hugoUIService.log(credentials);
            if ($scope.password == $scope.passwordagain) {
                loginService.register(credentials, config).then(function(response) {
                    hugoUIService.log(response);
                }, function(response) {
                    hugoUIService.log('ERROR:');
                    hugoUIService.log(response);

                });
            } else {
                ngNotify.config({
                    theme: 'pure',
                    position: 'top',
                    duration: 2000,
                    sticky: false,
                    button: true,
                    html: false
                });
                ngNotify.set('Passwords do not match', 'error');
            }

        };
    }]);
})();
