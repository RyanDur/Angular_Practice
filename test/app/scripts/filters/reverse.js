'use strict';

angular.module('testApp')
  .filter('reverse', function () {
    return function (input) {
      return 'reverse filter: ' + input;
    };
  });
