'use strict';

describe('Airport', function(){
  var airport;

  beforeEach(function(){
    airport = new Airport();
  });

  it('starts off with no planes', function(){
    expect(airport.planes()).toEqual([]);
  });

});
