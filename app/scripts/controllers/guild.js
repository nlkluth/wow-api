'use strict';

var nav = angular.module('wow.controller.guild', ['wow.services.guild']);

nav.controller('GuildController', ['$scope', '$stateParams', 'Guild', function($scope, $stateParams, Guild) {
  $scope.name = $stateParams.name;
  $scope.realm = $stateParams.realm;

  Guild.info($scope.realm, $scope.name).then(function(result) {
      $scope.info = result.data;
    }, function(error) {
      console.log(error, 'error');
    });
}]);
