const assert = require('assert');
const isFromBellville = require('../isFromBellville');

describe('isFromBellville function', function(){

    it('check if the registration number is from Bellville and returns true', function(){
        assert.equal(isFromBellville("CA 123"), false);
    });
  });
