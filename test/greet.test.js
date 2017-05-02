const assert = require('assert');
const greet = require('../greet');

describe('The greet function', function() {

    it('should greet Janine correctly', function() {
        assert.equal('Hello, Janine', greet('Janine'));
    });
    it('should not greet Thabang correctly', function() {
        // this test will fail - can you fix it?
        assert.equal('Hello, Thabang', greet('Thabang'));
    });
});
