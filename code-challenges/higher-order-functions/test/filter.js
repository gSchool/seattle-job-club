const filter = require('../src/filter')
const { assert } = require('chai')

describe('#filter(collection, callback)', function() {

  it('should iterate on each character of a string', function() {
    var filteredArray = filter('pizza', function(val, i, array) {
      return val === 'z';
    });

    assert.deepEqual(filteredArray, ['z', 'z']);
  });

  it('should iterate on each element of an array', function() {
    var filteredArray = filter([1,2,3,4], function(val, i, array) {
      return (val % 2) === 0;
    });

    assert.deepEqual(filteredArray, [2, 4]);
  });

  it('should iterate on each element of an object', function() {
    var filteredArray = filter({a: 1, b: 2, c: 3}, function(val, key, obj) {
      return (val % 2) === 1;
    });

    assert.deepEqual(filteredArray, [1, 3]);
  });

});
