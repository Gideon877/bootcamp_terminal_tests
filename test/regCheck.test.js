import assert from "assert";
import regCheck from "../regCheck.js";

describe('regCheck function', function(){

    it('check if a registration number is for ND registration plates and returns false', function(){
        assert.equal(regCheck('CY189-012', 'ND'), false);
    });

    it('check if a registration number is for GP registration plates and returns true', function(){
        assert.equal(regCheck('TTT 098 GP', 'GP'), true);
    });
});
