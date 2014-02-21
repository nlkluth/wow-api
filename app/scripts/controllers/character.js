'use strict';

var controllers = angular.module('wow.controller.character', ['wow.services.character']);

controllers.controller('CharacterController', ['$scope', '$routeParams', 'Character',
  function($scope, $routeParams, Character) {
    $scope.character = {
      name: $routeParams.name,
      realm: $routeParams.realm
    };

    Character.info($scope.character.realm, $scope.character.name).then(function(result) {
      $scope.character.achievementsCompleted = result.data.achievements.achievementsCompleted;
      $scope.character.achievements = result.data.achievementPoints;
      $scope.character.battlegroup = result.data.battlegroup;
      $scope.character.class = result.data.class;
      $scope.character.gender = result.data.gender;
      $scope.character.level = result.data.level;
      $scope.character.race = result.data.race;
      $scope.character.thumbnail = result.data.thumbnail;
      $scope.character.totalHonerableKills = result.data.totalHonerableKills;

      $scope.feed = result.data.feed;
      $scope.guild = result.data.guild;
      $scope.items = result.data.items;
      $scope.mounts = result.data.mounts.collected;
      $scope.pets = result.data.pets.collected;
      $scope.professions = result.data.professions;
      $scope.progression = result.data.progression;
      $scope.pvp = result.data.pvp;
      $scope.quests = result.data.quests;
      $scope.stats = result.data.stats;
      $scope.talents = result.data.talents;
    }, function(error) {
      console.log(error, 'error');
    });
  }]);
