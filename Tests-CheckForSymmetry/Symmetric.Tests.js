let expect = require("chai").expect;
let isSymmetric = require("./Symmetrix").isSymmetric;

describe('function returns true for symmetric array and false for non symmetric',function () {

    it('should return false if array is string', function () {

        let expectedResult = false;
        let actual = isSymmetric('asdasd');
        expect(actual).to.be.equal(expectedResult);


    });
    it('should return false if array is number', function () {

        let expectedResult = false;
        let actual = isSymmetric(2);
        expect(actual).to.be.equal(expectedResult);


    });
    it('should return true if array is symmetric', function () {

        let expectedResult = true;
        let actual = isSymmetric([3,4,3]);
        expect(actual).to.be.equal(expectedResult);

    });
    it('should return false if array is not symmetric', function () {

        let expectedResult = false;
        let actual = isSymmetric([3,4,3,2]);
        expect(actual).to.be.equal(expectedResult);

    });

    it('should return true if array is symmetric', function () {

        let expectedResult = true;
        let actual = isSymmetric([3, 4, 3, 4, 3]);
        expect(actual).to.be.equal(expectedResult);

    });
    it('should return true if array is symmetric', function () {

        let expectedResult = true;
        let actual = isSymmetric([]);
        expect(actual).to.be.equal(expectedResult);

    });

    it('should return true if array is symmetric', function () {

        let expectedResult = false;
        let actual = isSymmetric({});
        expect(actual).to.be.equal(expectedResult);

    });
    it('should return true when input array is symmetrical', function () {
        const inputArray = ['a', 'b', 'c', 'b', 'a'];

        const expected = true;
        const actual = isSymmetric(inputArray);

        expect(actual).to.be.equal(expected);
    });


    it('should return true when input array has elements of different types', function () {
        const inputArray = [1, 'text', {name: 'John'}, false, {name: 'John'}, 'text', 1];

        const expected = true;
        const actual = isSymmetric(inputArray);

        expect(actual).to.be.equal(expected);
    });
});