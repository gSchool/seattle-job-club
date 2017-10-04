const reduce = require('../src/reduce')
const { assert } = require('chai')

describe('#reduce(collection, callback)', function() {

  it('should reduce a string into a single specified value', function() {
    var reduced = reduce('abc', function (acc, val, i, array) {
      return acc.toUpperCase() + val.toUpperCase();
    });

    assert.deepEqual(reduced, 'ABC');
  });

  it('should reduce a string into a single specified value with an initial value given', function() {
    var reduced = reduce('abc', function (acc, val, i, array) {
      return acc + val.toUpperCase();
    }, '123');

    assert.deepEqual(reduced, '123ABC');
  });

  it('should reduce a string into a single specified value with an initial value given that is falsey', function() {
    var reduced = reduce('abc', function (acc, val, i, array) {
      return acc + val.toUpperCase();
    }, '');

    assert.deepEqual(reduced, 'ABC');
  });

  it('should reduce an array into a single specified value', function() {
    var reduced = reduce([1,2,3,4], function(acc, val, i, array) {
      return acc + val;
    });

    assert.deepEqual(reduced, 10);
  });

  it('should reduce an array into a single specified value with an initial value given', function() {
    var reduced = reduce([1,2,3,4], function(acc, val, i, array) {
      return acc + val;
    }, 10);

    assert.deepEqual(reduced, 20);
  });

  it('should reduce an array into a single specified value with an initial value given that is falsey', function() {
    var reduced = reduce([1,2,3,4], function(acc, val, i, array) {
      return acc + val;
    }, 0);

    assert.deepEqual(reduced, 10);
  });

  it('should reduce an object into a single specified value', function() {
    var reduced = reduce({a: 1, b: 2, c: 3}, function(acc, val, key, obj) {
      return acc + val
    });

    assert.deepEqual(reduced, 6);
  });

  it('should reduce an object into a single specified value with an initial value given', function() {
    var reduced = reduce({a: 1, b: 2, c: 3, d: 4}, function(acc, val, key, obj) {
      return acc + (val * 2)
    }, 1);

    assert.deepEqual(reduced, 21);
  });

  it('should reduce an object into a single specified value with an initial value given that is falsey', function() {
    var reduced = reduce({a: 1, b: 2, c: 3, d: 4}, function(acc, val, key, obj) {
      return acc + (val * 2)
    }, 0);

    assert.deepEqual(reduced, 20);
  });

});
