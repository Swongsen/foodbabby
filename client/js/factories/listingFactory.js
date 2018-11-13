angular.module('listings', []).factory('Listings', function($http) {
  var methods = {
    getAll: function() {
      return $http.get('http://localhost:8080/api/listings');
    },
	
	  create: function(listing) {
      return $http.post('http://localhost:8080/api/listings', listing);
      }, 

    delete: function(id) {
      return $http.delete('http://localhost:8080/api/listings/' + id);
    },

    getAllForMap: function() {
      return $http.get('http://localhost:8080/api/listings/mapview');
    },

    getByFoodTypeForMap: function(foodtype) {
      return $http.get('http://localhost:8080/api/listings/mapview/' + foodtype);
    }
  };

  return methods;
});
