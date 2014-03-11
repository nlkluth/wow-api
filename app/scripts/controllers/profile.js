'use strict';

var controllers = angular.module('wow.controller.profile', ['wow.services.profile']);

controllers.controller('ProfileController', ['$scope', 'Profile',
  function($scope, Profile) {

    Profile.list().then(function(result) {
      $scope.profiles = result.data;
    }, function(error) {
      console.log(error, 'error');
    });
  }]);
