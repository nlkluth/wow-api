/* global app:true */
'use strict';

var app = angular.module('wow', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap',
  'wow.controller.nav',
  'wow.controller.realm',
  'wow.controller.realmdetail',
  'wow.controller.pvp',
  'wow.controller.character',
  'wow.controller.tabs'
]);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/realms.html',
      })
      .when('/realm/:name', {
        templateUrl: 'views/realmdetail.html'
      })
      .when('/pvp', {
        templateUrl: 'views/pvp.html'
      })
      .when('/character/:realm/:name', {
        templateUrl: 'views/character.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

app.run(['$http', function($httpProvider) {
  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);
