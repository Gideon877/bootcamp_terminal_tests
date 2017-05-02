const assert = require('assert');
const fromWhere = require('../fromWhere');

describe ('fromWhere function', function(){
  it('should return Bellville for CY', function(){
    assert.equal(fromWhere("CY"), "Bellville")
  })

  it('should return Paarl for CJ', function(){
    assert.equal(fromWhere("CJ"), "Paarl")
  })
})
