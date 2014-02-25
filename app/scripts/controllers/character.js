'use strict';

var controllers = angular.module('wow.controller.character', ['wow.services.character']);

controllers.controller('CharacterController', ['$scope', '$stateParams', 'Character',
  function($scope, $stateParams, Character) {
    $scope.character = {
      name: $stateParams.name,
      realm: $stateParams.realm
    };

    Character.info($scope.character.realm, $scope.character.name).then(function(result) {
      console.log(result.data);
      $scope.info = result.data;
    }, function(error) {
      console.log(error, 'error');
    });
  }]);
