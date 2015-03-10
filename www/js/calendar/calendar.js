angular.module('pto.controllers.calendar', [
  'ui.calendar'
])
  .controller('CalendarCtrl', function($scope) {
    $scope.total = 60;
    $scope.used = 20;
    $scope.balance = $scope.total - $scope.used;

    $scope.uiConfig = {
      calendar:{
        height: 450,
        editable: true,
        header:{
          left: 'month basicWeek basicDay agendaWeek agendaDay',
          center: 'title',
          right: 'today prev,next'
        },
        dayClick: $scope.alertEventOnClick,
        eventDrop: $scope.alertOnDrop,
        eventResize: $scope.alertOnResize
      }
    };
  });