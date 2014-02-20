'use strict';

var services = angular.module('wow.services.pvp', []);

services.factory('PvP', ['$http', function($http) {
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
    list: function(bracket) {
      return load('/api/pvp/' + bracket);
    }
  };
}]);
