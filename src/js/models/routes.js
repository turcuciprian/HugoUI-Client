(function() {
    app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        //validation function
        var isLogged = function($q, $rootScope, $location, $http) {
            $location.path('/login');
            return true;
        };
        //the routes
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
