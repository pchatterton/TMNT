'use strict';

describe('Service: Turtleservice', function () {

  // load the service's module
  beforeEach(module('tmntAppApp'));

  // instantiate service
  var Turtleservice;
  beforeEach(inject(function (_Turtleservice_) {
    Turtleservice = _Turtleservice_;
  }));

  it('should do something', function () {
    expect(!!Turtleservice).toBe(true);
  });

});
