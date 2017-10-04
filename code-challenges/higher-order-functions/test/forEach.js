const forEach = require('../src/forEach')
const { assert } = require('chai')

describe('#forEach(collection, callback)', function() {

  it('should iterate on each character of a string', function() {
    var iterated = '';

    forEach('pizza', function(val, i, string) {
      iterated += val;
    });

    assert.deepEqual(iterated, 'pizza');
  });

  it('should iterate on each element of an array', function() {
    var iterated = [];

    forEach([1,2,3,4], function(val, i, array) {
      iterated.push(val);
    });

    assert.deepEqual(iterated, [1,2,3,4]);
  });

  it('should iterate on each element of an object', function() {
    var iterated = [];

    forEach({a: 1, b: 2, c: 3}, function(val, key, obj) {
      iterated.push(val);
    });

    assert.deepEqual(iterated, [1, 2, 3]);
  });

});
