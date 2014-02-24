'use strict';

var controllers = angular.module('wow.controller.pvp', ['wow.services.pvp']);

controllers.controller('PvPController', ['$scope', '$stateParams', 'PvP',
  function($scope, $stateParams, PvP) {
    $scope.bracket = '3v3';

    PvP.list($scope.bracket).then(function(result) {
      $scope.leaderboard = result.data.rows;
    }, function(error) {
      console.log(error, 'error');
    });
  }]);
