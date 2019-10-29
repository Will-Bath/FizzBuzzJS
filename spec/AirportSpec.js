'use strict';

describe('Airport', function(){
  var airport;
  var plane;
  beforeEach(function(){
    airport = new Airport();
    plane = jasmine.createSpy('plane', ['land']);
  });

  it('starts off with no planes', function(){
    expect(airport.planes()).toEqual([]);
  });

  it('can clear planes for landng', function(){
    airport.clearForLanding(plane);
    expect(airport.planes()).toEqual([plane]);
  });

  it('can clear planes for takeoff', function(){
    airport.clearForLanding(plane);
    airport.clearForTakeoff(plane);
    expect(airport.planes()).toEqual([]);
  });

  it('can check for stormy conditions', function(){
    expect(airport.isStormy()).toBeFalsy();
  });
});

describe('under stormy conditions', function(){
  var airport;
  var plane;
  airport = new Airport();
  plane = jasmine.createSpy('plane', ['land']);

  it ('does not clear planes for takeoff', function(){
    spyOn(airport, 'isStormy').and.returnValue(true);
    expect(function(){ airport.clearForTakeoff(plane); }).toThrowError('cannot takeoff during storm');
  });
});
