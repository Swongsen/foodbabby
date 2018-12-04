angular.module('listings').controller('ListingsController', ['$scope', '$location', 'Listings', 
  function($scope, $location, Listings) {
    /* Get all the listings, then bind it to the scope */
    Listings.getAll().then(function(response) {
      $scope.listings = response.data;
      
    }, function(error) {
      console.log('Unable to retrieve listings:', error);
    });

    Listings.getAllForMap().then(function(response) {
      $scope.mapInfo = response.data;
    }, function(error) {
      console.log('Unable to retrieve listings:', error);
    });

    $scope.filterByFoodTypeForMap = function() {
      Listings.getByFoodTypeForMap($scope.query).then(function(response) {
        $scope.mapInfo = response.data;
      }, function(error) {
        console.log('Unable to retrieve listings by food type:', error);
      });
    };

    $scope.detailedInfo = undefined;

    $scope.addListing = function() {
      Listings.create($scope.newListing).then(function(response)
      {
        Listings.getAll().then(function(response) 
        {
          $scope.listings = response.data;
        })
      },
      function(error)
      {
        console.log('Addition Failed. Error: ', error);
      })
    };

    $scope.addListingAndGoToMap = function() {
        Listings.create($scope.newListing).then(function(response)
        {
          Listings.getAll().then(function(response) 
          {
            $scope.listings = response.data;
            $location.path( '/mapview.html' );
          })
        },
        function(error)
        {
          console.log('Addition Failed. Error: ', error);
        })
    };

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