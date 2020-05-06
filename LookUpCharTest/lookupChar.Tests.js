let lookupChar = require('./lookupChar').lookupChar;

let expect = require('chai').expect;

describe('function should return char at index', function () {

    it('should return undefined for multiple cases', function () {

        let expectedTwo = lookupChar(2,2);

        expect(expectedTwo).to.be.undefined;

        let expectedThree = lookupChar('dasdasd', {name: 'Peter'});

        expect(expectedThree).to.be.undefined;

        let expectedFour = lookupChar('dasdasd', 'game is on');

        expect(expectedFour).to.be.undefined;

        let expectedFive = lookupChar('dasdasd', [1,2,3,4]);

        expect(expectedFive).to.be.undefined;

        let expectedSix = lookupChar('dasdasd', 3.14);

        expect(expectedSix).to.be.undefined;
    });

    it('should return incorect index', function () {

        let expectedOne = lookupChar('', 0);

        expect(expectedOne).to.be.equal('Incorrect index');

        let expectedTwo = lookupChar('sdadasd', -1);

        expect(expectedTwo).to.be.equal('Incorrect index');

        let expectedThree = lookupChar('dasd11dsds', 100);

        expect(expectedThree).to.be.equal('Incorrect index');

    });

    it('should return the correct char at result', function () {
        let expectedOne = lookupChar('hello', 0);

        expect(expectedOne).to.be.equal('h');

        let expectedTwo = lookupChar('hello', 1);

        expect(expectedTwo).to.be.equal('e');

    });
});