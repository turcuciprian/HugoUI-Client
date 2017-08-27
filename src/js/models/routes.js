(function() {
    app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        var isLogged = function($q, $rootScope, $location, $http) {
            $location.path('/login');
            return true;
        }
        $routeProvider
            .when("/login", {
                templateUrl: "src/views/login.html",
                resolve: {
                    factory: isLogged
                }
            })
            .when("/dashboard", {
                templateUrl: "src/views/dashboard.html",
                resolve: {
                    factory: isLogged
                }
            })
            .otherwise({
                templateUrl: "src/views/login.html",
                resolve: {
                    factory: isLogged
                }
            });
    }]);
})();
