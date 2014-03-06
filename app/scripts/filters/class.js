'use strict';

var filters = angular.module('wow.filters.class', []);
filters.filter('class', function () {
  return function (input) {
    var classes = {
      1: 'Warrior',
      2: 'Paladin',
      3: 'Hunter',
      4: 'Rogue',
      5: 'Priest',
      6: 'Death Knight',
      7: 'Shaman',
      8: 'Mage',
      9: 'Warlock',
      10: 'Monk',
      11: 'Druid'
    };

    if (classes[input]) {
      return classes[input];
    }

    return input;
  };
});
