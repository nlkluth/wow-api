'use strict';

var controllers = angular.module('wow.controller.realmdetail', ['wow.services.realms']);

controllers.controller('RealmDetailController', ['$scope', '$routeParams', 'Realms',
  function($scope, $routeParams, Realms) {
    $scope.name = $routeParams.name;

    Realms.information($scope.name).then(function(result) {
      $scope.realm = result.data.realms[0];
    }, function(error) {
      console.log(error, 'error');
    });
  }]);
