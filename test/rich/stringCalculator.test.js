const assert = require("chai").assert;
const StringCalculator = require("./stringCalculator");

describe("String Calculator", () => {
    
    it('returns 0 for empty string', () => {
        assert.equal(StringCalculator.add(""), 0);
    });
    
    it('sums any amount of numbers within the string', () => {
        assert.equal(StringCalculator.add("1,2,3,4,5,6,7,8,9"), 45);
    });

    it('returns the same number', () => {
        assert.equal(StringCalculator.add("1"), 1);
    });

	it('allows new lines between numbers (instead of commas)', () => {
        assert.equal(StringCalculator.add("1\n2,3"), 6);
    });

    it('supports different delimiters', () => {
        assert.equal(StringCalculator.add("//;\n1;2"), 3);
    });
	
	it('throws an exception if founded negative with "negatives not allowed" message and the negative that was passed', () => {
        assert.throws(() => StringCalculator.add("//;\n1;2;-5;-6"), Error, "negatives not allowed -5,-6");
    });

    it('ignores numbers bigger than 1000', () => {
        assert.equal(StringCalculator.add("//;\n1;2;1003"), 3);
    });
	
	it('allows of any length with the following format: “//[delimiter]\\n”', () => {
		assert.equal(StringCalculator.add("//[tincho][rich]\n1tincho2tincho1003"), 3);
	});
    
    

});