const assert = require('assert');
const yearsAgo = require('../yearsAgo');

describe('yearsAgo function', function(){

    it('takes in a year and return how many years ago that was', function(){
        assert.equal(yearsAgo(1990), 27);
      });
});
