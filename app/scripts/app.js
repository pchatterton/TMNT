'use strict';

angular
  .module('tmntAppApp', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');
    // Set up the states
    $stateProvider
      .state('main', {
        url: "/",
        templateUrl: "views/main.html",
        controller: 'MainCtrl',
        resolve: {
          teams: function(TurtleService) {
            return TurtleService.getTeams();
          }
        }
      })
      .state('team', {
        url: '/team/:teamId',
        templateUrl: 'views/teamview.html',
        controller: 'TeamCtrl',
        resolve:  {
          team: function(TurtleService, $stateParams) {
            return TurtleService.getTeam($stateParams.teamId);
          }
        }
      })
      .state('character', {
        url: '/char/:charId',
        templateUrl: 'views/charview.html',
        controller: 'CharCtrl',
        resolve:  {
          char: function(TurtleService, $stateParams) {
            return TurtleService.getChar($stateParams.charId);
          }
        }
      })
  });
