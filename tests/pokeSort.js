'use strict'

const expect = require("chai").expect
const sort = require('../pokeSort.js')

describe("pokeSort", function() {
  it("sort an array of pokemon objects either by id", function() {
    expect(sort(pokeArray, 'id')).to.equal('charmander');
  });
});

describe("pokeSort", function() {
  it("sort an array of pokemon objects either by name", function() {
    expect(sort(pokeArray, 'name')).to.equal('charmander');
  });
});

describe("pokeSort", function() {
  it("sort an array of pokemon objects either by weight", function() {
    expect(sort(pokeArray, 'weight')).to.equal('charmander');
  });
});
