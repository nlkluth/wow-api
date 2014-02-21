'use strict';

var services = angular.module('wow.services.character', []);

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
      return load('/api/character/' + realm + '/' + name + '?fields=achievements,feed,guild,hunterPets,items,mounts,pets,professions,petSlots,progression,pvp,quests,stats,talents,titles');
    }
  };
}]);
