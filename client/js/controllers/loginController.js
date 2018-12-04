angular.module('login').controller('LoginController', ['$scope', '$location', 'Accounts', 
    
  function($scope, Accounts)
  {
     /* Get all the listings, then bind it to the scope */
     Accounts.getAll().then(function(response) 
     {
      $scope.login = response.data;
      
      }, function(error) {
      console.log('Unable to retrieve accounts:', error);
      });

      $scope.addListing = function() 
      {
          Accounts.createAcc($scope.register).then(function(response)
          {
            Accounts.getAccounts().then(function(response) 
            {
              $scope.accounts = response.data;
            })
          },
          function(error)
          {
            console.log('Account addition Failed. Error: ', error);
          })
        };
     
      $scope.signIn = function() 
      {
          Accounts.create($scope.register).then(function(response)
          {
            Accounts.find().then(function(response) 
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
