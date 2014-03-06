'use strict';

var filters = angular.module('wow.filters.race', []);
filters.filter('race', function () {
  return function (input) {
    var Races = {
      1: 'Human',
      2: 'Orc',
      3: 'Dwarf',
      4: 'Night Elf',
      5: 'Undead',
      6: 'Tauren',
      7: 'Gnome',
      8: 'Troll',
      9: 'Goblin',
      10: 'Blood Elf',
      11: 'Draenei',
      22: 'Worgen',
      24: 'Pandaren',
      25: 'Pandaren',
      26: 'Pandaren'
    };

    if (Races[input]) {
      return Races[input];
    }

    return input;
  };
});
