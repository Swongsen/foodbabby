angular.module('listings', []).factory('Listings', function($http) {
  var methods = {
    getAll: function() {
      return $http.get('https://powerful-beach-46688.herokuapp.com/api/listings');
    },
	
	  create: function(listing) {
      return $http.post('https://powerful-beach-46688.herokuapp.com/api/listings', listing);
      }, 

    delete: function(id) {
      return $http.delete('https://powerful-beach-46688.herokuapp.com/api/listings/' + id);
    },

    getAllForMap: function() {
      return $http.get('https://powerful-beach-46688.herokuapp.com/api/listings/mapview');
    }
  };

  return methods;
});

angular.module('listings', []).factory('Login', function($http) {
  var methods = {
    getAllAccounts: function() {
      return $http.get('https://powerful-beach-46688.herokuapp.com/api/listings/login');
    },
    findById: function(id) {
      return $http.get('https://powerful-beach-46688.herokuapp.com/api/listings/login' + id);
    },
	  createAccount: function(login) {
      return $http.post('https://powerful-beach-46688.herokuapp.com/api/listings/login', login);
    }
  };

  return methods;
});
