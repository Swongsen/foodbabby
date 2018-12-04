angular.module('listings').controller('LoginController', ['$scope', '$location', 'Login',
  function($scope, $location, Login) {
    /* Get all the listings, then bind it to the scope */
    Login.getAll().then(function(response) {
      $scope.accounts = response.data;

    }, function(error) {
      console.log('Unable to retrieve account:', error);
    });

    $scope.addAccount = function() {
	  /**TODO
	  *Save the article using the Listings factory. If the object is successfully
	  saved redirect back to the list page. Otherwise, display the error
	 */
      Login.create($scope.register).then(function(response)
      {
        Login.getAll().then(function(response)
        {
          $scope.account = response.data;
          $location.path('/index.html');
        })
      },
      function(error)
      {
        console.log('Addition Failed. Error: ', error);
      })
    };

    $scope.signIn = function() {
        Login.create($scope.register).then(function(response)
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
