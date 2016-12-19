'use strict'

const expect = require("chai").expect
const sort = require('../pokeSort.js')

describe("pokeSort", function() {
  it("sort an array of pokemon objects either by id", function() {
    expect(sort([], 'id')).to.eql([]);
  });
});

describe("pokeSort", function() {
  it("sort an array of pokemon objects either by name", function() {
    expect(sort([], 'name')).to.eql([]);
  });
});

describe("pokeSort", function() {
  it("sort an array of pokemon objects either by weight", function() {
    expect(sort([], 'weight')).to.eql([]);
  });
});
