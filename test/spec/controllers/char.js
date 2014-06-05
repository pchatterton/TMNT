'use strict';

describe('Controller: CharCtrl', function () {

  // load the controller's module
  beforeEach(module('tmntAppApp'));

  var CharCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CharCtrl = $controller('CharCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
