angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    /* Get all the listings, then bind it to the scope */
    Listings.getAll().then(function(response) {
      $scope.listings = response.data;
      
    }, function(error) {
      console.log('Unable to retrieve listings:', error);
    });

    $scope.detailedInfo = undefined;

    $scope.addListing = function() {
	  /**TODO 
	  *Save the article using the Listings factory. If the object is successfully 
	  saved redirect back to the list page. Otherwise, display the error
	 */
      Listings.create($scope.newListing).then(function(response)
      {
        Listings.getAll().then(function(response) 
        {
          $scope.listings = response.data;
        })
      },
      function(error)
      {
        server.console.log('Addition Failed. Error: ', error);
      }
    )};

    $scope.deleteListing = function(index) {
	  
      //Code basically re-used from assignment 2, work smarder not harder
      Listings.delete($scope.listings[index]._id)
      .then(function(response)
      {
        Listings.getAll().then(function(response) 
        {
          $scope.listings = response.data;
        }),
        function(error) 
        {
          console.log('Unable to retrieve listings:', error);
        }
      }, 
      function(error)
      {
        if(error)
          console.log('Deletion Failed. Error: ', error);
         
      });
    };

    $scope.showDetails = function(index) {
      $scope.detailedInfo = $scope.listings[index];
    };
  }
]);