const assert = require('assert');
const countAllPaarl = require('../countAllPaarl');

describe('countAllPaarl function', function(){
     it('returns all the registration numbers in the string for Paarl', function(){
         assert.deepEqual(countAllPaarl("CL 900,CJ 678 543,CA 34567,CJ 67890,CN 7864"), ["CJ 678 543", 'CJ 67890']);
       });
 });
