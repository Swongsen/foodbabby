angular.module('listings').controller('LoginController', ['$scope', '$location', 'Login', 
    
    function($scope, Login) {
        /* Get all the accounts, then bind it to the scope */
        Login.getAllAccounts().then(function(response) {
        $scope.login = response.data;
        
        }, function(error) {
        console.log('Unable to retrieve accounts:', error);
        });

        // $scope.addListing = function() {
        //     Listings.create($scope.register).then(function(response)
        //     {
        //       Login.create().then(function(response) 
        //       {
        //         $scope.account = response.data;
        //       })
        //     },
        //     function(error)
        //     {
        //       console.log('Account addition Failed. Error: ', error);
        //     })
        //   }
        // },
       
        $scope.signIn = function() {
            Login.createAccount($scope.register).then(function(response)
            {
              Login.findById($scope.login[index]._id).then(function(response) 
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