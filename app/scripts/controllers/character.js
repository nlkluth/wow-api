'use strict';

var controllers = angular.module('wow.controller.character', ['wow.services.character']);

controllers.controller('CharacterController', ['$scope', '$routeParams', 'Character',
  function($scope, $routeParams, Character) {
    $scope.character = {
      name: $routeParams.name,
      realm: $routeParams.realm
    };

    Character.info($scope.character.realm, $scope.character.name).then(function(result) {
      console.log(result.data);
      $scope.info = result.data;
    }, function(error) {
      console.log(error, 'error');
    });
  }]);
