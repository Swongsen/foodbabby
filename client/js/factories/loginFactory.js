angular.module('listings').factory('LoginFactory', function($http) {
    var methods = {
      getAllAccounts: function() {
        return $http.get('/api/login');
      },
      findById: function(id) {
        return $http.get('/api/login/' + id);
      },
      createAccount: function(login) {
        return $http.post('/api/login', login);
      }
    };
  
    return methods;
  });