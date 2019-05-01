const assert = require("chai").assert;
const StringCalculator = require("./stringCalculator");

describe("String Calculator", () => {
  it('1.1. empty string returns 0', () => {
    assert.equal(StringCalculator.add(""), 0);
  });
  it('1.2. should return the sum of two simples numbers', () => {
    assert.equal(StringCalculator.add("1,2"), 3);
  });
  it('2. should return the sum of unkown amount of numbers', () => {
    assert.equal(StringCalculator.add("1,2,3"), 6);
  });
  it('3. should return the sum of two of numbers separated by comma eather new line', () => {
    assert.equal(StringCalculator.add("1\n2,3"), 6);
  });
  it('4. should support different delimiters', () => {
    assert.equal(StringCalculator.add("//;\n1;2"), 3);
  });
  it('5.1. should not support negative numbers and throw an exception', () => {
    let result;
    try {
      result = StringCalculator.add("//;\n-1;2"); 
    } catch (error) { result = error.message; }
    assert.equal(result, "Negative numbers are not supported: -1");
  });
  it('5.2. should throw an exception with the invalid numbers', () => {
    let result;
    try {
      result = StringCalculator.add("//;\n-1;-2"); 
    } catch (error) { result = error.message; }
    assert.equal(result, "Negative numbers are not supported: -1, -2");
  });
  it('6.1. should ignore numbers greater than 1000 and return 2', () => {
    assert.equal(StringCalculator.add("2,1001"), 2);
  });
  it('6.2. should ignore numbers greater than 1000 at the begining of string', () => {
    assert.equal(StringCalculator.add("//;\n1001;1;2;3"), 6);
  });
  it('7. should validate delimiters with different length format', () => {
    assert.equal(StringCalculator.add("//[***]\n1***2***3"), 6);
  });
});
