'use strict'

const expect = require("chai").expect
const triangle = require('../areaCalc')

describe("areaCalc", function() {
  it("should compute area of a triangle given three lengths ", function() {
    expect(triangle.areaCalc(3, 4, 5)).to.equal(12);
    expect(triangle.areaCalc(0, 0, 0)).to.equal(0);
  });
});
