angular.module('pto.controllers.settings', [
  // dependencies
])
  .controller('SettingsCtrl', function($scope) {
    $scope.rate = 13.34;
    $scope.time = 'monthly';
  })
  .controller('HolidaysCtrl', function($scope) {
   $scope.holidays = ['New Year’s Day', 'Martin Luther King, Jr. Day', 'Memorial Day', 'Independence Day', 'Labor Day', 'Columbus Day', 'Thanksgiving Day', 'Christmas Day'];
  });