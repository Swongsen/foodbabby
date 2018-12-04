angular.module('login', []).factory('Accounts', function($http) {
    var methods = {
      getAllAccounts: function() {
        return $http.get('/api/listings/index');
      },
      findById: function(id) {
        return $http.get('/api/listings/index' + id);
      },
        createAccount: function(login) {
        return $http.post('/api/listings/index', login);
      }
    };
    return methods;
  });