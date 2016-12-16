'use strict'

const expect = require("chai").expect
const lib = require('../areaCalc')

describe("areaCalc", function() {
  it("should compute area of a triangle given three lengths ", function() {
    expect(areaCalc(3, 4, 5)).to.equal(12);
    expect(areaCalc(0, 0, 0)).to.equal(0);
  });
});
