'use strict';

var controllers = angular.module('wow.controller.pvp', ['wow.services.pvp']);

controllers.controller('PvPController', ['$scope', '$stateParams', 'PvP',
  function($scope, $stateParams, PvP) {
    $scope.bracket = '3v3';
    $scope.searchsize = {
      'limit': 10
    };

    $scope.setPage = function (pageNo) {
      $scope.currentPage = pageNo;
    };

    PvP.list($scope.bracket).then(function(result) {
      $scope.leaderboard = result.data.rows;
      $scope.totalItems = result.data.rows.length;
    }, function(error) {
      console.log(error, 'error');
    });
  }]);
