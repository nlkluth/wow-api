'use strict';

var filters = angular.module('wow.filters.class', []);
filters.filter('class', function () {
  return function (input) {
    if (input === 1) { return 'Warrior'; }
    if (input === 2) { return 'Paladin'; }
    if (input === 3) { return 'Hunter'; }
    if (input === 4) { return 'Rogue'; }
    if (input === 5) { return 'Priest'; }
    if (input === 6) { return 'Death Knight'; }
    if (input === 7) { return 'Shaman'; }
    if (input === 8) { return 'Mage'; }
    if (input === 9) { return 'Warlock'; }
    if (input === 10) { return 'Monk'; }
    if (input === 11) { return 'Druid'; }
    else { return input; }
  };
});
