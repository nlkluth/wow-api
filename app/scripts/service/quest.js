'use strict';

var services = angular.module('wow.services.quest', []);

services.factory('Quest', ['$http', function($http) {
  function load(path) {
    var request = $http({
      method: 'GET',
      url: path,
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    });

    return request;
  }

  return {
    info: function(questId) {
      return load('/api/quest/' + questId);
    }
  };
}]);
