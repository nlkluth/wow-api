'use strict';

var services = angular.module('wow.services.item', []);

services.factory('Item', ['$http', function($http) {
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
    info: function(id) {
      return load('/api/item/' + id);
    }
  };
}]);
