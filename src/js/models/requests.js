(function(){
  app.factory('HUIRequests', ['$http', function($http) {
  var req = {
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    }
  };
  return {
    get: function(tempUrl, config) {
      config = (typeof config === "undefined" ? {} : config);
      return $http.get(tempUrl, config);
    },
    post: function(tempUrl, sendData) {
      req['method'] = 'POST';
      return $http.post(tempUrl, sendData, req);
    }
  }
}]);
})();
