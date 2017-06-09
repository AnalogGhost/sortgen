if (typeof window === 'undefined' && typeof require !== 'undefined') {
  var assert = require('chai').assert;
  var sortgen = require('../dist/sortgen.js');
} else {
  window.assert = chai.assert;
}

describe('Does sortgen exist?',function() {

  it('typeof sortgen should be an object',function() {
    assert.isObject(sortgen);
  });

  it('typeof sortgen.keySort should be a function', function () {
    assert.isFunction(sortgen.keySort);
  });

});

describe('Does sortgen key sort work?', function () {

  it('Sortgen sorts the test function by id in ascending order', function() {
    let test = [{id:1},{id:5},{id:3}];
    let expected = [{id:1},{id:3},{id:5}];
    test.sort(sortgen.keySort('id'));
    assert.deepEqual(test,expected);
  });

  it('Sortgen sorts the test function by id in descending order', function() {
    let test = [{id:1},{id:5},{id:3}];
    let expected = [{id:5},{id:3},{id:1}];
    test.sort(sortgen.keySort('id',true));
    assert.deepEqual(test,expected);
  });

});
