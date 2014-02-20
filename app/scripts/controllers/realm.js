'use strict';

var controllers = angular.module('wow.controller.realm', ['wow.services.realms']);

controllers.controller('RealmController', ['$scope', 'Realms', function($scope, Realms) {
  Realms.status().then(function(result) {
    $scope.realms = result.data.realms;
  }, function(error) {
    console.log(error, 'error');
  });

  $scope.types = {
    'PvP': 'pvp',
    'PvE': 'pve',
    'rpPvP': 'rppvp',
    'rpPvE': 'rppve'
  };

  $scope.searchsize = {
    'limit': 10
  };

  $scope.strictsearch = {};
}]);
