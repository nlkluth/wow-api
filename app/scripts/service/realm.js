'use strict';

var services = angular.module('wow.services.realms', []);

services.factory('Realms', ['$http', function($http) {
  function load (path) {
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
    status: function () {
      return load('/realms');
    }
  };
}]);
