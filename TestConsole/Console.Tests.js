let Console = require("./Console").Console;
let expect = require("chai").expect;

describe('C# console wrapped',function () {
    it('should check placeholder getter', function () {
        expect(Console.placeholder.toString()).to.be.eq('/{\\d+}/g');
    });

    it('should write (Console.writeLine) arguments with one parameter', function () {
        expect(Console.writeLine('Hello World!')).to.be.equal('Hello World!');
        let obj = {
            name: 'Peter',
            age: 10,
            grades: [6,6,6,6],
        };
        expect(Console.writeLine(obj)).to.be.equal(JSON.stringify(obj));

        expect(() => {
            Console.writeLine('Hello {0} {0} {0}', 1,2,3);
        }).to.throw(RangeError, 'Incorrect placeholders given!');

        expect( Console.writeLine('Hello {1} {0} {2}', 1,2,3)).to.be.equal('Hello 2 1 3');
        expect( Console.writeLine('Hello there {0}, {1} {2} you?', 'Sam', 'how', 'are')).to.be.equal('Hello there Sam, how are you?');

        expect(()=> {
            Console.writeLine('', 'Sam', 'how', 'are');
        }).to.throw(TypeError, "Cannot read property 'sort' of null");

        expect(()=> {
            Console.writeLine('{0}', 'Sam', 'how', 'are');
        }).to.throw(RangeError, "Incorrect amount of parameters given!");

        expect(
            Console.writeLine('{0} {1} {2}', 'Sam', 'how', 'are')
        ).to.be.equal('Sam how are');
    });

    it('should ', function () {
        expect(() => {
            Console.writeLine(() => {}, 1,2,3)
        }).to.throw(TypeError, 'No string format given!');

        expect(() => {
            Console.writeLine('Hello {1}', 1,2,3);
        }).to.throw(RangeError, 'Incorrect amount of parameters given!');
    });

    it('should ', function () {
        expect(Console.writeLine([1,2,3,4])).to.equal('[1,2,3,4]');


        expect(() => {
            Console.writeLine('Hello {1} {0} {3}', 1,2,3);
        }).to.throw(RangeError, 'Incorrect placeholders given!');

    });

    it('should ', function () {
        expect(() => {
            Console.writeLine('Hello {0} {0} {0}', 1,2,3);
        }).to.throw(RangeError, 'Incorrect placeholders given!');

        expect( Console.writeLine('Hello {1} {0} {2}', 1,2,3)).to.be.equal('Hello 2 1 3');
        expect( Console.writeLine('Hello there {0}, {1} {2} you?', 'Sam', 'how', 'are')).to.be.equal('Hello there Sam, how are you?');
    });

    it('should ', function () {
        expect(()=> {
            Console.writeLine('', 'Sam', 'how', 'are');
        }).to.throw(TypeError, "Cannot read property 'sort' of null");

        expect(()=> {
            Console.writeLine('{0}', 'Sam', 'how', 'are');
        }).to.throw(RangeError, "Incorrect amount of parameters given!");

    });
});