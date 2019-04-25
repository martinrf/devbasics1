const assert = require("chai").assert;
const StringCalculator = require("./stringCalculator");

describe("String Calculator", () => {
    it('empty string returns 0', () => {
        assert.equal(StringCalculator.add(""), 0);
    });
});