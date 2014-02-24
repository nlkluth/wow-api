/* global app:true */
'use strict';

var app = angular.module('wow', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap',
  'ui.router',
  'wow.controller.nav',
  'wow.controller.realm',
  'wow.controller.realmdetail',
  'wow.controller.pvp',
  'wow.controller.character',
  'wow.controller.tabs'
]);

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/404');

    $stateProvider
      .state('realms', {
        url: '/',
        templateUrl: 'views/realms.html'
      })
      .state('realm detail', {
        url: '/realm/:name',
        templateUrl: 'views/realmdetail.html'
      })
      .state('pvp list', {
        url: '/pvp',
        templateUrl: 'views/pvp.html'
      })
      .state('character', {
        url: '/character/:realm/:name',
        templateUrl: 'views/pvp.html'
      })
      .state('404', {
        url: '/404',
        templateUrl: '404.html'
      });
  }]);

app.run(['$http', function($httpProvider) {
  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);
