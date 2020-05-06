let createCalculator = require('./calculator').createCalculator;
let expect = require("chai").expect;

    describe('function that creates calculator and modifies internal value', function () {

        let calc;

        beforeEach(function () {
            calc = createCalculator();
        });

        it('should add values', function () {

            calc.add(100);
            let expected = calc.get();
            let actual = 100;

            expect(actual).to.be.equal(expected);

            calc.add(100);
            let nextExpected = calc.get();
            expect(200).to.be.equal(nextExpected);

        });

        it('should substract value', function () {

            calc.add(100);
            calc.subtract(20);
            let expected = calc.get();

            let actual = 80;
            expect(actual).to.be.equal(expected);
            calc.subtract(50);
            expected = calc.get();

            expect(30).to.be.equal(expected);

        });


        it('should return correct value', function () {


            calc.add(1000);
            let expected = calc.get();
            let actual = 1000;
            expect(actual).to.be.equal(expected);
        });

        it('function add should return NaN when not containing a number string is given', function () {
            calc.add('ten');

            const actual = calc.get();

            expect(actual).to.be.NaN;
        });

        it('should ', function () {
            calc.subtract('ten');

            const actual = calc.get();

            expect(actual).to.be.NaN;
        });

        it('should not be able to modify the internal sum', function () {
            calc.value -= 1;

            const expected = 0;
            const actual = calc.get();
            expect(actual).to.be.equal(expected);
        });

        it('should have closure with internal sum 0', function () {
            const expected = 0;
            const actual = calc.get();

            expect(actual).to.be.equal(expected);
        });


        it('should do proper calculations with given numbers and numbers as strings', function () {
            calc.add(4);
            calc.add('3');
            calc.subtract(3);
            calc.subtract('2');

            const expected = 2;
            const actual = calc.get();

            assert.equal(actual, expected);
        });

    });