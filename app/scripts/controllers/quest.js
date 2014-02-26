'use strict';

var nav = angular.module('wow.controller.quest', ['wow.services.quest']);

nav.controller('QuestController', ['$scope', '$stateParams', 'Quest', function($scope, $stateParams, Quest) {
  $scope.id = $stateParams.id;

  Quest.info($scope.id).then(function(result) {
      $scope.info = result.data;
    }, function(error) {
      console.log(error, 'error');
    });
}]);
