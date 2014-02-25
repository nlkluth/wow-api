'use strict';

var services = angular.module('wow.services.guild', []);

services.factory('Character', ['$http', function($http) {
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
    info: function(realm, name) {
      return load('/api/guild/' + realm + '/' + name);
    }
  };
}]);
