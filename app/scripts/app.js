/* global app:true */
'use strict';

var app = angular.module('wow', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap',
  'ui.router',
  'wow.config',
  'wow.controller.nav',
  'wow.controller.realm',
  'wow.controller.realmdetail',
  'wow.controller.pvp',
  'wow.controller.character',
  'wow.controller.tabs',
  'wow.controller.guild',
  'wow.controller.quest',
  'wow.controller.item',
  'wow.controller.itemset',
  'wow.controller.profile',
  'wow.controller.profiledetail',
  'wow.filters.gender',
  'wow.filters.class',
  'wow.filters.race'
]);

app.run(['$http', function($httpProvider) {
  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);
