let sum = require("./sum").sum;
let expect = require("chai").expect;

describe("arr sum numbers", function () {

    it('should return 3 for [1,2]', function () {
        let expectedSum = 3;
        let actual = sum([1,2]);
        expect(actual).to.be.equal(expectedSum);
    });

    it('should return 4 for [2,2]', function () {
        let expectedSum = 4;
        let actual = sum([2,2]);
        expect(actual).to.be.equal(expectedSum);
    });

    it('should return 5 for [2,3]', function () {
        let expectedSum = 5;
        let actual = sum([2,3]);
        expect(actual).to.be.equal(expectedSum);
    })
});