angular.module('tropicalDiary.controllers', ['ionic', 'tropicalDiary.controllers'])

.controller('AppCtrl', function($scope, $ionicModal, $location, $timeout, $state) {
console.log("In App Ctrl");


$scope.capture = function() {
  console.log('Capture Pressed');
  $state.go('capture');
};


})


.controller('CaptureCtrl', function($scope, $ionicModal, $location, $timeout, $state, $http) {
console.log("In Capture Ctrl");

 $scope.currentEntry = {};


$http.get('https://tropical-kids-api.mybluemix.net/api/Infants').then(function(resp) {
   console.log('Success', resp);
   // For JSON responses, resp.data contains the result
   $scope.infants = resp.data;

 }, function(err) {
   console.error('ERR', err);
   // err.status will contain the status code
 })


$scope.mainMenu = function() {
  console.log('Cancel Pressed');
  $state.go('app');
};


$scope.saveEntry = function() {
  console.log('Save Pressed');
  console.log( $scope.currentEntry);
  $state.go('app');
};


});
