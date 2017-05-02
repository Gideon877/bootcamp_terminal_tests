const assert = require('assert');
const countRegNumber = require('../countRegNumber');

describe('countRegNumber function', function(){
  it ('should return 3 for the number of registration numbers in the string', function(){
    assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328'), 3);
  });
});
