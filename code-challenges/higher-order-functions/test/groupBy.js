const groupBy = require('../src/groupBy')
const { assert } = require('chai')

describe('#groupBy(collection, callback)', function() {

  it('should return an object grouped by the result from the callback', function() {
    var grouped = groupBy('MyString', function (val, i, array) {
      return val.toLowerCase() === val;
    });

    assert.deepEqual(grouped, { true: ['y','t','r','i','n','g'], false: ['M', 'S'] });
  });

  it('should iterate on each element of an array', function() {
    var grouped = groupBy([1,2,3,4], function(val, i, array) {
      return (val % 2) === 0;
    });

    assert.deepEqual(grouped, { true: [2, 4], false: [1, 3] });
  });


  it('should iterate on each element of an object', function() {
    var grouped = groupBy({a: 1, b: 2, c: 3}, function(val, key, obj) {
      return (val % 2) === 0;
    });

    assert.deepEqual(grouped, { true: [2], false: [1, 3] });
  });

});
