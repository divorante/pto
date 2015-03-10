angular.module('pto', [
  'ionic', 
  'pto.controllers',
])
  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard for form inputs)
      if(window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if(window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'js/common/templates/tabs.html'
      })
      .state('tab.home', {
        url: '/home',
        views: {
          'tab-home': {
            templateUrl: 'js/common/templates/home.html',
            controller: 'HomeCtrl'
          }
        }
      })
      .state('tab.calendar', {
        url: '/calendar',
        views: {
          'tab-calendar': {
            templateUrl: 'js/calendar/templates/calendar.html',
            controller: 'CalendarCtrl'
          }
        }
      })
      .state('tab.settings', {
        url: '/settings',
        views: {
          'tab-settings': {
            templateUrl: 'js/settings/templates/settings.html',
            controller: 'SettingsCtrl'
          }
        }
      })
      .state('tab.company-holidays', {
        url: '/settings/holidays',
        views: {
          'tab-settings': {
            templateUrl: 'js/settings/templates/holidays.html',
            controller: 'HolidaysCtrl'
          }
        }
      });

    $urlRouterProvider.otherwise('/tab/home');

  });

