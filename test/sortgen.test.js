if (typeof window === 'undefined' && typeof require !== 'undefined') {
  var assert = require('chai').assert;
  var sortgen = require('../src/sortgen');
} else {
  window.assert = chai.assert;
}

describe('Sortgen tests',function() {

  it('typeof sortgen should be function',function() {
    assert.isFunction(sortgen);
  });

});
