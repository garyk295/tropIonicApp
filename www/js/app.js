// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('FundManagmentApp', ['ionic', 'FundManagmentApp.controllers', 'lbServices', 'ui.router'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $locationProvider)
{

//$locationProvider.html5Mode({enabled: true, requireBase: false}).hashPrefix("!");

  $stateProvider

  .state('app', {
    url: "/app",
    templateUrl: "templates/mainMenu.html",
    controller: 'AppCtrl'
  })

  .state('placeOrder', {
    url: "/placeorder",
    templateUrl: "templates/placeOrder.html",
    controller: 'PlaceOrderCtrl'
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'AuthLoginController'
  })
  .state('mainMenu', {
    url: '/mainMenu',
    templateUrl: 'templates/mainMenu.html',
    controller: 'MainMenuController'
  })
  .state('logout', {
    url: '/logout',
    controller: 'AuthLogoutController'
  })
  .state('sign-up', {
    url: '/sign-up',
    templateUrl: 'templates/sign-up-form.html',
    controller: 'SignUpController',
  })
  .state('sign-up-success', {
    url: '/sign-up/success',
    templateUrl: 'templates/sign-up-success.html'
  });


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});
