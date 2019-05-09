const assert = require("chai").assert;
const MapReduce = require("./mapReduce");

describe("String Calculator", () => {
    let input;
    beforeEach(() => {
        input = ["ACACACAGT"]
    });

    it('map return ACA as first result', () => {
        const result = MapReduce.map(input);
        assert.equal(result[0].key, "ACA");
        assert.equal(result[0].value, 1);
    });

    it('map return ACA 1 as first element and CAC 1 as second element', () => {
        const result = MapReduce.map(input);
        assert.equal(result[0].key, "ACA");
        assert.equal(result[0].value, 1);
        assert.equal(result[1].key, "CAC");
        assert.equal(result[1].value, 1);
    });

    it('map return seven elements', () => {
        const result = MapReduce.map(input);
        assert.equal(result.length, 7);
    });

    it('map return last element is AGT 1', () => {
        const result = MapReduce.map(input);
        assert.equal(result[6].key, "AGT");
        assert.equal(result[6].value, 1);
    });

    it('reducer returns four elements', () => {
        const result = MapReduce.map(input);
        const reduced = MapReduce.reduce(result);
        assert.equal(reduced.length, 4);
    });

    it('reducer ACA has three appearances', () => {
        const result = MapReduce.map(input);
        const reduced = MapReduce.reduce(result);
        assert.equal(reduced[0].key, "ACA");
        assert.equal(reduced[0].value, 3);
    });

    it('reducer AGT has one appearance', () => {
        const result = MapReduce.map(input);
        const reduced = MapReduce.reduce(result);
        assert.equal(reduced[3].key, "AGT");
        assert.equal(reduced[3].value, 1);
    });
});