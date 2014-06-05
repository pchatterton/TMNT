'use strict';

angular.module('tmntAppApp')
  .service('TurtleService', function Turtleservice($q, $http) {
    this.getTeams = function() {
      //Promise is set
      var deferred = $q.defer();

      $http({method: 'GET', url: 'http://tmnt.devmounta.in/team'}).success(function(data) {
        console.log(data);
        deferred.resolve(data);
      });
      return deferred.promise;
    };

    this.getTeam = function(teamId) {
      var deferred = $q.defer();
        $http({method: 'GET', url: 'http://tmnt.devmounta.in/team/' + teamId
      }).success(function(data) {
            deferred.resolve(data);
          }
        );
      return deferred.promise;
    };

    this.getChar = function(charId) {
      var deferred = $q.defer();
        $http({method: 'GET', url: 'http://tmnt.devmounta.in/character/'+charId
      }).success(function(data) {
            deferred.resolve(data);
          }
        );
      return deferred.promise;


    };

  });
