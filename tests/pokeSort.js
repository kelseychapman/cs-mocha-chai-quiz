'use strict'

const expect = require("chai").expect
const lib = require('../pokeSort.js')

describe("pokeSort", function() {
  it("sort an array of pokemon objects either by id", function() {
    expect(pokeSort(pokeArray, 'id')).to.equal('charmander');
  });
});

describe("pokeSort", function() {
  it("sort an array of pokemon objects either by name", function() {
    expect(pokeSort(pokeArray, 'name')).to.equal('charmander');
  });
});

describe("pokeSort", function() {
  it("sort an array of pokemon objects either by weight", function() {
    expect(pokeSort(pokeArray, 'weight')).to.equal('charmander');
  });
});
