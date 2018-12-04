// angular.module('login').controller('LoginController', ['$scope', '$location', 'Accounts', 
    
//   function($scope, Accounts)
//   {
//      /* Get all the listings, then bind it to the scope */
//      Accounts.getAll().then(function(response) 
//      {
//       $scope.login = response.data;
      
//       }, function(error) {
//       console.log('Unable to retrieve accounts:', error);
//       });

//       $scope.addListing = function() 
//       {
//           Accounts.createAcc($scope.register).then(function(response)
//           {
//             Accounts.getAccounts().then(function(response) 
//             {
//               $scope.accounts = response.data;
//             })
//           },
//           function(error)
//           {
//             console.log('Account addition Failed. Error: ', error);
//           })
//         };
     
//       $scope.signIn = function() 
//       {
//           Accounts.create($scope.register).then(function(response)
//           {
//             Accounts.find().then(function(response) 
//             {
//               $scope.account = response.data;
//               $location.path( '/mapview.html' );
//             })
//           },
//           function(error)
//           {
//             console.log('No account with that information. Error: ', error);
//           })
//       }
//     }
// ]);

angular.module('login').controller('LoginController', ['$scope', '$location', 'Login', 
    
    function($scope, Login) {
        console.log("loginController");
        /* Get all the accounts, then bind it to the scope */
        Login.getAllAccounts().then(function(response) {
        $scope.login = response.data;
        
        }, function(error) {
        console.log('Unable to retrieve accounts:', error);
        });

        $scope.createAccount = function() {
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
          },
       
        $scope.signIn = function() {
          console.log("Sign in logincontroller");
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
      }
]);
