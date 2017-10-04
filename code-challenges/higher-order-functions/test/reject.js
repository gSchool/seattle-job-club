const reject = require('../src/reject')
const { assert } = require('chai')

describe('#reject(collection, callback)', function() {

  it('should iterate on each character of a string', function() {
    var rejectedCollection = reject('pizza', function(val, i, array) {
      return val === 'z';
    });

    assert.deepEqual(rejectedCollection, ['p', 'i', 'a']);
  });

  it('should iterate on each element of an array', function() {
    var rejectedCollection = reject([1,2,3,4], function(val, i, array) {
      return (val % 2) === 0;
    });

    assert.deepEqual(rejectedCollection, [1, 3]);
  });


  it('should iterate on each element of an object', function() {
    var rejectedCollection = reject({a: 1, b: 2, c: 3}, function(val, key, obj) {
      return (val % 2) === 1;
    });

    assert.deepEqual(rejectedCollection, [2]);
  });

});
