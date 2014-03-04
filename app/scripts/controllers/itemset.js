'use strict';

var controllers = angular.module('wow.controller.itemset', ['wow.services.item']);

controllers.controller('SetController', ['$scope', '$stateParams', 'Item',
  function($scope, $stateParams, Item) {
    $scope.id = $stateParams.id;
    Item.setinfo($scope.id).then(function(result) {
      $scope.info = result.data;
    }, function(error) {
      console.log(error, 'error');
    });
  }]);
