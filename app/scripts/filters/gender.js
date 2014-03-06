'use strict';

var filters = angular.module('wow.filters.gender', []);
filters.filter('gender', function () {
  return function (input) {
    var gender = {
      0: 'Male',
      1: 'Female'
    };

    if(gender[input]) {
      return gender[input];
    }

    return input;
  };
});
