angular.module('pto.controllers.users', [
  'pto.models.users'
])
  .controller('UsersCtrl', function($scope) {
    $scope.rate = 13.34;
    $scope.time = 'monthly';
  });