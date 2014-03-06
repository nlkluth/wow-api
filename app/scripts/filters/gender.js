'use strict';

var filters = angular.module('wow.filters.gender', []);
filters.filter('gender', function () {
  return function (input) {
    if (input === 0) { return 'Male'; }
    if (input === 1) { return 'Female'; }
    else { return input; }
  };
});
