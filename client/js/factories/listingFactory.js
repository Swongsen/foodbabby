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
    },

    getByFoodTypeForMap: function(foodtype) {
      return $http.get('/api/listings/mapview/' + foodtype);
    },
    //createAcc: function()
  };

  return methods;
});
