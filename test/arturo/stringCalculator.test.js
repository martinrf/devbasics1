const assert = require("chai").assert;
const StringCalculator = require("./stringCalculator");

describe("Arturo - String Calculator", () => {
    it('empty string returns 0', () => {
        assert.equal(StringCalculator.add(""), 0);
    });
    it('one number string returns that number', () => {
        assert.equal(StringCalculator.add("1"), 1);
        assert.equal(StringCalculator.add("21"), 21);
    });
    it('two numbers string returns the sum of those numbers', () => {
        assert.equal(StringCalculator.add("1,2"), 3);
    });
    it('unknown amount of numbers in string returns the sum of those numbers', () => {
        assert.equal(StringCalculator.add("1,2,3,4"), 10);
    });
    it('allowing newline as delimiter', () => {
        assert.equal(StringCalculator.add("1\n2,3\n4"), 10);
    });
    it('allowing to specify the delimiter', () => {
        assert.equal(StringCalculator.add("//;\n1;2;3;4"), 10);
        assert.equal(StringCalculator.add("1;2;3;4"), 10);
    });
    it('negative values are not allowed and should return an error with a list of the negative numbers', () => {
        assert.equal(StringCalculator.add("//;\n1;-2;-3;4"), "Negative values are not allowed [-2,-3]");
    });    
    it('numbers bigger than 1000 should not be added', () => {
        assert.equal(StringCalculator.add("//;\n1;2;3;4000"), 6);
    });   
    it('Delimiters can be of any length with the following format: "//[delimiter]\\n"', () => {
        assert.equal(StringCalculator.add("//[kkk]\n1kkk2kkk3kkk4"), 10);
    });  
    it('Allow multiple delimiters like this: "//[*][#]\\n"', () => {
        assert.equal(StringCalculator.add("//[*][#]\n1*2#3#4"), 10);
    });
    it('make sure you can also handle multiple delimiters with length longer than one char: "//[delim1][delim2]\\n"', () => {
        assert.equal(StringCalculator.add("//[delim1][delim2]\n1delim12delim23delim14"), 10);
    });
});