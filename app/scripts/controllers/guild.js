'use strict';

var nav = angular.module('wow.controller.guild', []);

nav.controller('GuildController', ['$scope', '$stateParams', function($scope, $stateParams) {
  $scope.name = $stateParams.name;
}]);
