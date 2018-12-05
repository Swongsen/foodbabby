angular.module('listings', []).factory('Listings', function($http) {
  var methods = {
    getAll: function() {
      return $http.get(window.location.origin + '/api/listings');
    },
	
	  create: function(listing) {
      return $http.post(window.location.origin + '/api/listings', listing);
    }, 

    delete: function(id) {
      return $http.delete(window.location.origin + '/api/listings/' + id);
    },

    getAllForMap: function() {
      return $http.get(window.location.origin + '/api/listings/mapview');
    },
  };

  return methods;
});
