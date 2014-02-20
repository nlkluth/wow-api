/* global app:true */
'use strict';

var app = angular.module('wow', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'wow.controller.nav',
  'wow.controller.realm',
  'wow.controller.realm',
]);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/realms.html',
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

app.run(['$http', function($httpProvider) {
  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);
