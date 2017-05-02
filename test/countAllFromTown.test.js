const assert = require('assert');
const countAllFromTown = require('../countAllFromTown');

describe('countAllFromTown function', function() {
    it('returns all the registration numbers in the string from town', function() {
        assert.deepEqual(countAllFromTown("CL 900,CJ 678 543,CA 34567,CJ 67890,CN 7864"), []);
    });
});
