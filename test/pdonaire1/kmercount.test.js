const assert = require("chai").assert;
const KmerCount = require("./kmercount");

describe("KmerCount", () => {
  it('1. Should format the array', () => {
    KmerCount.formatArray();
    assert.equal(KmerCount.array.length, 7);
  });
  it('2. Should sort the array', () => {
    KmerCount.shuffle();
    assert.deepEqual(KmerCount.array, ["ACA", "ACA", "ACA", "AGT", "CAC", "CAC", "CAG"]);
  });
  it('3. Should return the accumulator', () => {
    assert.deepEqual(KmerCount.getResult(), [ { ACA: 3 }, { AGT: 1 }, { CAC: 2 }, { CAG: 1 } ]);
  });
  
});
