app.factory('loginService', ['hugoUIService', 'HUIRequests', function(hugoUIService, HUIRequests) { //components Management Controller get data
    return {
        login: function(param) { //add a component to the endpoints
            //do the push to add the component
            var data = {
                'username': param.username,
                'password': param.password,
            }
            //get  default components list
            HUIRequests.post('http://localhost:8888/HugoUIServer/user', data).then(function(response) {
                hugoUIService.log(response);
                return response.data;

            }, function(response) {

                hugoUIService.log('components add request error');
                hugoUIService.log(response);

            });
        },
        register: function(param){
          var data = {
              'username': param.username,
              'password': param.password,
          }
          //get  default components list
          return HUIRequests.post('http://localhost:8888/HugoUIServer/user', data);
        }

    }
}]);
