'use strict';

var controllers = angular.module('wow.controller.item', ['wow.services.item']);

controllers.controller('ItemController', ['$scope', '$stateParams', 'Item',
  function($scope, $stateParams, Item) {
    $scope.id = $stateParams.id;
    Item.info($scope.id).then(function(result) {
      $scope.info = result.data;
    }, function(error) {
      console.log(error, 'error');
    });
  }]);
