angular.module('listings', []).factory('Listings', function($http) {
  var methods = {
    getAll: function() {
      return $http.get('/api/listings');
    },
	
	  create: function(listing) {
      return $http.post('/api/listings', listing);
      }, 

    delete: function(id) {
      return $http.delete('/api/listings/' + id);
    },

    getAllForMap: function() {
      return $http.get('/api/listings/mapview');
    }
  };
  return methods;
});

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
