app.factory('loginService', ['hugoUIService', 'HUIRequests', function(hugoUIService, HUIRequests) { //components Management Controller get data
    return {
        login: function(param) { //add a component to the endpoints
            //do the push to add the component

            //get  default components list
            HUIRequests.post(BASE_URL + '/login', param).then(function(response) {
                hugoUIService.log(response);
                return response.data;

            }, function(response) {

                hugoUIService.log('components add request error');
                hugoUIService.log(response);

            });
        },
        register: function(param) {
            //get  default components list
            return HUIRequests.post(BASE_URL + '/user', param);
        }

    }
}]);
