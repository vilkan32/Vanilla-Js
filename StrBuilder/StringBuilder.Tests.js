let StringBuilder = require('./StringBuilder').StringBuilder;

let expect = require('chai').expect;

describe('Stringbuilder class', function () {

    it('should verify parameters constructor check', function () {

        expect(()=> {
            new StringBuilder(123);
        }).to.throw(TypeError, 'Argument must be string');

        expect(()=> {
            new StringBuilder([]);
        }).to.throw(TypeError, 'Argument must be string');

        expect(()=> {
            new StringBuilder({name: 'Peter'});
        }).to.throw(TypeError, 'Argument must be string');

        expect(new StringBuilder(undefined)._stringArray.length).to.eq([].length);

        expect(new StringBuilder('Pesho')._stringArray.join('')).to.equal(Array.from('Pesho').join(''));

    });

    it('should append check', function () {

        let str = new StringBuilder("Hello");

        expect(()=> {
            str.append(' World!')
        }).not.to.throw(TypeError, 'Argument must be string');

        expect(str._stringArray.length).to.equal(12);

        expect(str._stringArray.join('')).to.equal('Hello World!');

        expect(()=> {
            str.append([])
        }).to.throw(TypeError);


    });

    it('should prepend check', function () {

        let str = new StringBuilder("hello.");

        expect(()=> {
            str.prepend('My name is Pesho, ')
        }).not.to.throw(TypeError, 'Argument must be string');

        expect(str._stringArray.length).to.equal(24);

        expect(str._stringArray.join('')).to.equal('My name is Pesho, hello.');

        expect(()=> {
            str.prepend(123)
        }).to.throw(TypeError);

    });

    it('should insert at check', function () {

        let str = new StringBuilder("hello.");

        expect(()=> {
            str.insertAt('My name is Pesho, ', 1)
        }).not.to.throw(TypeError, 'Argument must be string');

        expect(str._stringArray.length).to.equal(24);

        expect(str._stringArray.join('')).to.equal('hMy name is Pesho, ello.');

        expect(()=> {
            str.prepend(123)
        }).to.throw(TypeError);


    });

    it('should remove', function () {
        let str = new StringBuilder("hello.");
        str.remove(1,2);
        expect(str._stringArray.length).to.equal(4);
        expect(str._stringArray.join('')).to.equal('hlo.');
    });

    it('should tostring check', function () {
        let str = new StringBuilder("hello.");

        expect(str.toString()).to.equal('hello.')

    });


    it('should work correctly with negative index', function () {
        let str = new StringBuilder();
        str.append('abcd');
        str.insertAt(' appended text ', -1);

        const expected = 'abc appended text d';
        const actual = str.toString();

        assert.equal(actual, expected);
    });

    it('should work correctly when multiple functions are called', function () {
        let str = new StringBuilder();
        str.append('ghi');
        str.prepend('abc');
        str.insertAt('def', 3);
        str.remove(3, 3);

        const expected = 'abcghi';
        const actual = str.toString();

        assert.equal(actual, expected);
    });

    it('should work correctly with negative index', function () {
        let str = new StringBuilder();
        str.append('abcd');
        str.insertAt(' appended text ', -1);

        const expected = 'abc appended text d';
        const actual = str.toString();

        assert.equal(actual, expected);
    });


    it('should ', function () {
        expect(StringBuilder.prototype).to.have.property('append');
        expect(StringBuilder.prototype).to.have.property('prepend');
        expect(StringBuilder.prototype).to.have.property('insertAt');
        expect(StringBuilder.prototype).to.have.property('remove');
        expect(StringBuilder.prototype).to.have.property('toString');
    });

});