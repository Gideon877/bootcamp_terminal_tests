import assert from "assert";
import yearsAgo from "../yearsAgo.js";

describe('yearsAgo function', function(){

    it('takes in a year and return how many years ago that was', function(){
        assert.equal(yearsAgo(1993), 30);
      });
});
