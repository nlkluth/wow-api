'use strict';

var services = angular.module('wow.services.profile', []);

services.factory('Profile', ['$http', function($http) {
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
    list: function() {
      return load('/api/profiles');
    },
    detail: function(id) {
      return load('/api/profiles/' + id);
    }
  };
}]);
