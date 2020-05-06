let mathEnforcer = require('./mathEnforcer').mathEnforcer;

let expect = require('chai').expect;

describe('function should behave as expected',function () {

    it('should addFive', function () {

        let expected = mathEnforcer.addFive(5);

        expect(10).to.be.equal(expected);

        let expectedOne = mathEnforcer.addFive([]);

        expect(expectedOne).to.be.undefined;

        let expectedTwo = mathEnforcer.addFive({name: 'Peter'});

        expect(expectedTwo).to.be.undefined;

        let expectedThree = mathEnforcer.addFive(5.55555555555);

        expect(expectedThree).to.be.closeTo(10.55, 0.01);

        let expectFour = mathEnforcer.addFive('asdasd');

        expect(expectFour).to.be.undefined;

        let expectedFive = mathEnforcer.addFive(-10);

        expect(expectedFive).to.be.equal(-5);

    });

    it('should subtract ten', function () {

        let expected = mathEnforcer.subtractTen(10);

        expect(0).to.be.equal(expected);

        let expectedOne = mathEnforcer.subtractTen([]);

        expect(expectedOne).to.be.undefined;

        let expectedTwo = mathEnforcer.subtractTen({name: 'Peter'});

        expect(expectedTwo).to.be.undefined;

        let expectedThree = mathEnforcer.subtractTen(5.55555555555);

        expect(expectedThree).to.be.closeTo(-4.45, 0.01);

        let expectFour = mathEnforcer.subtractTen('asdasd');

        expect(expectFour).to.be.undefined;

        let expectedFive = mathEnforcer.subtractTen(-10);

        expect(-20).to.be.equal(expectedFive);
    });

    it('should sum', function () {

        let expected = mathEnforcer.sum('asdas', 10);

        expect(expected).to.be.undefined;

        let expectedOne = mathEnforcer.sum([], 10);

        expect(expectedOne).to.be.undefined;

        let expectedTwo = mathEnforcer.sum({name: 'Peter'}, 10);

        expect(expectedTwo).to.be.undefined;

        let expectedThree = mathEnforcer.sum(10, '');

        expect(expectedThree).to.be.undefined;

        let expectedFour = mathEnforcer.sum(10, [1,2,3]);

        expect(expectedFour).to.be.undefined;

        let expectedFive = mathEnforcer.sum(10, {name: 'George'});

        expect(expectedFive).to.be.undefined;

        let expectedSix = mathEnforcer.sum(10,10);

        expect(20).to.be.equal(expectedSix);

        let expectedSeven = mathEnforcer.sum(5.555, 10.5);

        expect(16.05).to.be.closeTo(expectedSeven, 0.01);

        let expectedEight = mathEnforcer.sum('', 'dasdas');

        expect(expectedEight).to.be.undefined;

        let expectedNine = mathEnforcer.sum(-10, -20);
        expect(expectedNine).to.be.equal(-30);

    });
});