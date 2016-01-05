angular
  .module('FundManagmentApp')
  .factory('AuthService', ['Customer', '$q', '$rootScope', function(Customer, $q,
      $rootScope) {



    function login(email, password) {
      console.log("IN AUTH JS");
      // return   $rootScope.currentUser = {
      //       id: '2',
      //       tokenId: '2',
      //       email: 'email'
      //     };

      return Customer
        .login({email: email, password: password})
        .$promise
        .then(function(response) {
          console.log("RESPONSE IN AUTH JS");
          $rootScope.currentUser = {
            id: response.user.id,
            tokenId: response.id,
            email: email
          };
        });
    }

    function logout() {
      return Customer
       .logout()
       .$promise
       .then(function() {
         $rootScope.currentUser = null;
       });
    }

    function register(email, password) {
      return Customer
        .create({
         email: email,
         password: password
       })
       .$promise;
    }

    return {
      login: Customer,
      logout: logout,
      register: register
    };
  }]);
