'use strict';

angular.module('tmntAppApp')
  .controller('TeamCtrl', function ($scope, team) {
    $scope.team = team[0].characters;
  });
