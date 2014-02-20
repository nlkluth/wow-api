'use strict';

var services = angular.module('wow.services.realms', []);

services.factory('Realms', ['$http', function($http) {
  function load () {
    var request = $http({
      method: 'GET',
      url: '/realms',
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    });

    return request;
  }

  return {
    status: function () {
      return load('realm/status');
    }
  };
}]);
