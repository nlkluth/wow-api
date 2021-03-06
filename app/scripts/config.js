'use strict';

var config = angular.module('wow.config', []);

config.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/404');

  $stateProvider
    .state('realms', {
      url: '/',
      templateUrl: 'views/realms.html'
    })
    .state('realm detail', {
      url: '/realm/:name',
      templateUrl: 'views/realmdetail.html'
    })
    .state('pvp list', {
      url: '/pvp',
      templateUrl: 'views/pvp.html'
    })
    .state('character', {
      url: '/character/:realm/:name',
      templateUrl: 'views/character.html'
    })
    .state('character.feed', {
      url: '/feed',
      templateUrl: 'views/partials/character/feed.html'
    })
    .state('character.petsmounts', {
      url: '/petsmounts',
      templateUrl: 'views/partials/character/mountspets.html'
    })
    .state('character.achievements', {
      url: '/achievements',
      templateUrl: 'views/partials/character/achievements.html'
    })
    .state('character.professions', {
      url: '/professions',
      templateUrl: 'views/partials/character/professions.html'
    })
    .state('character.progression', {
      url: '/progression',
      templateUrl: 'views/partials/character/progression.html'
    })
    .state('character.guild', {
      url: '/guild',
      templateUrl: 'views/partials/character/guild.html'
    })
    .state('character.pvpquests', {
      url: '/pvpquests',
      templateUrl: 'views/partials/character/pvpquests.html'
    })
    .state('character.talents', {
      url: '/talents',
      templateUrl: 'views/partials/character/talents.html'
    })
    .state('guild', {
      url: '/guild/:realm/:name',
      templateUrl: 'views/guild.html'
    })
    .state('guild.achievements', {
      url: '/achievements',
      templateUrl: 'views/partials/guild/achievements.html'
    })
    .state('guild.challenge', {
      url: '/challenge',
      templateUrl: 'views/partials/guild/challenge.html'
    })
    .state('guild.news', {
      url: '/news',
      templateUrl: 'views/partials/guild/news.html'
    })
    .state('quest', {
      url: '/quest/:id',
      templateUrl: 'views/quest.html'
    })
    .state('item', {
      url: '/item/:id',
      templateUrl: 'views/item.html'
    })
    .state('set', {
      url: '/item/set/:id',
      templateUrl: 'views/itemset.html'
    })
    .state('profile', {
      url: '/profile',
      templateUrl: 'views/profile.html'
    })
    .state('profile detail', {
      url: '/profile/:name',
      templateUrl: 'views/profiledetail.html'
    })
    .state('404', {
      url: '/404',
      templateUrl: '404.html'
    });
}]);
