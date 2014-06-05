'use strict';

angular.module('tmntAppApp')
  .controller('MainCtrl', function ($scope, teams) {

    $scope.teams = teams;

});
