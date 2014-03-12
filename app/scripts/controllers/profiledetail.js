'use strict';

var controllers = angular.module('wow.controller.profiledetail', ['wow.services.profile']);

controllers.controller('ProfileDetailController', ['$scope', 'Profile', '$stateParams',
  function($scope, Profile, $stateParams) {

    Profile.detail($stateParams.name).then(function(result) {
      $scope.profile = result.data;
    }, function(error) {
      console.log(error, 'error');
    });
  }]);
