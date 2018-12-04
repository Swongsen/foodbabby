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
    },

    getByFoodTypeForMap: function(foodtype) {
      return $http.get('https://powerful-beach-46688.herokuapp.com/api/listings/mapview/' + foodtype);
    }
  };

  return methods;
});
