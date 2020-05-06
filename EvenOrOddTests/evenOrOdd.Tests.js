let isOddOrEven = require('./evenOrOdd').isOddOrEven;

let expect = require('chai').expect;

describe('function should behave as expected', function () {

    it('should return undefined if the input is not a string', function () {

        let expectedOne = isOddOrEven({name: 'steven'});

        expect(expectedOne).to.be.undefined;

        let expectedTwo = isOddOrEven([1,2,3,4, {name: 'Peter'}, 'asdd']);

        expect(expectedTwo).to.be.undefined;

        let expectedThree = isOddOrEven(1000);

        expect(expectedThree).to.be.undefined;

    });

    it('should return even when input is string', function () {

        let expectedOne = isOddOrEven('1234');
        let result = 'even';
        expect(expectedOne).to.be.equal(result);
        let expectedTwo = isOddOrEven('hello1');
        expect(expectedTwo).to.be.equal(result);
    });

    it('should return odd when input is odd string', function () {
        let expectedOne = isOddOrEven('123');
        let result = 'odd';
        expect(expectedOne).to.be.equal(result);
        let expectedTwo = isOddOrEven('hello');
        expect(expectedTwo).to.be.equal(result);
    });

});