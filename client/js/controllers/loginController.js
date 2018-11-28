angular.module('login').controller('LoginController', ['$scope', '$location', 'Login', 
    
    function($scope, $location, Listings) {
        /* Get all the listings, then bind it to the scope */
        Listings.getAll().then(function(response) {
        $scope.login = response.data;
        
        }, function(error) {
        console.log('Unable to retrieve accounts:', error);
        });

        $scope.addListing = function() {
            Listings.create($scope.register).then(function(response)
            {
              Login.create().then(function(response) 
              {
                $scope.account = response.data;
              })
            },
            function(error)
            {
              console.log('Account addition Failed. Error: ', error);
            })
          }
        },
       
        $scope.signIn = function() {
            Listings.create($scope.register).then(function(response)
            {
              Login.find().then(function(response) 
              {
                $scope.account = response.data;
                $location.path( '/mapview.html' );
              })
            },
            function(error)
            {
              console.log('No account with that information. Error: ', error);
            })
        }
]);
