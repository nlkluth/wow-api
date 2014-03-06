'use strict';

var filters = angular.module('wow.filters.race', []);
filters.filter('race', function () {
  return function (input) {
    if (input === 1) { return 'Human'; }
    if (input === 2) { return 'Orc'; }
    if (input === 3) { return 'Dwarf'; }
    if (input === 4) { return 'Night Elf'; }
    if (input === 5) { return 'Undead'; }
    if (input === 6) { return 'Tauren'; }
    if (input === 7) { return 'Gnome'; }
    if (input === 8) { return 'Troll'; }
    if (input === 9) { return 'Goblin'; }
    if (input === 10) { return 'Blood Elf'; }
    if (input === 11) { return 'Draenei'; }
    if (input === 22) { return 'Worgen'; }
    if (input === 24 || input === 26 || input === 25) { return 'Pandaren'; } // neutral alliance horde
    else { return input; }
  };
});
