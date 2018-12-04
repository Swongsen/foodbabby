angular.module('listings').controller('LoginController', ['$scope', '$location', 'LoginFactory', 
    
    function($scope, $location, Login) {
        /* Get all the accounts, then bind it to the scope */
        Login.getAllAccounts().then(function(response) {
        $scope.accounts = response.data;
        
        }, function(error) {
        console.log('Unable to retrieve accounts:', error);
        });

        $scope.createAccount = function() {
            Login.createAccount($scope.register).then(function(response)
            {
              Login.getAllAccounts().then(function(response) 
              {
                $scope.accounts = response.data;
              })
            },
            function(error)
            {
              console.log('Account addition Failed. Error: ', error);
            })
          },
       
        $scope.signIn = function() {
          console.log("Sign in logincontroller");
            Login.createAccount($scope.register).then(function(response)
            {
              Login.findById($scope.accounts[index]._id).then(function(response) 
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
      }
]);
