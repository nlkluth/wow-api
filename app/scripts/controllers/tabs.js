'use strict';

var controllers = angular.module('wow.controller.tabs', []);

controllers.controller('TabsController', ['$scope', function($scope) {
  $scope.navType = 'pills';
}]);
