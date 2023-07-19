import assert from "assert";
import fromWhere from "../fromWhere.js";

describe ('fromWhere function', function(){
  it('should return Bellville for CY', function(){
    assert.equal(fromWhere("CY"), "Bellville")
  })

  it('should return Paarl for CJ', function(){
    assert.equal(fromWhere("CJ"), "Paarl")
  })
})
