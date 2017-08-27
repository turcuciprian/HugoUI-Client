(function () {
    app.config(function($routeProvider) {
        $routeProvider
            .when("/login", {
                templateUrl: "src/views/login.html"
            })
            .when("/dashboard", {
                templateUrl: "src/views/dashboard.html"
            })
            .otherwise({
                templateUrl: "src/views/login.html"
            });
    });
})();
