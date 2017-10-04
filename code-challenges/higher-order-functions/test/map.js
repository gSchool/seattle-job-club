const map = require('../src/map')
const { assert } = require('chai')

describe('#map(collection, callback)', function() {

  it('should iterate on each character of a string', function() {
    var mapped = map('pizza', function(val, i, string) {
      return val;
    });

    assert.deepEqual(mapped, ['p', 'i', 'z', 'z', 'a']);
  });

  it('should iterate on each element of an array', function() {
    var mapped = map([1,2,3,4], function(val, i, array) {
      return val * val;
    });

    assert.deepEqual(mapped, [1, 4, 9, 16]);
  });

  it('should iterate on each element of an object', function() {
    var mapped = map({a: 1, b: 2, c: 3}, function(val, key, obj) {
      return val * val;
    });

    assert.deepEqual(mapped, [1, 4, 9]);
  });

});
