let rgbToHexColor = require("./Rgb.to.Hex").rgbToHexColor;
let expect = require("chai").expect;

describe('function converting rgb to hex color', function () {

    it('should return undefined because red is not a number', function () {

        let actual = undefined;
        let expected = rgbToHexColor('dasdasd', 123, 12);

        expect(expected).to.be.undefined;
    });
    it('should return undefined because red is less then zero', function () {

        let actual = undefined;
        let expected = rgbToHexColor(-1, 123, 12);

        expect(expected).to.be.undefined;
    });
    it('should return undefined because red is bigger then 255', function () {

        let actual = undefined;
        let expected = rgbToHexColor(256, 123, 12);

        expect(expected).to.be.undefined;
    });
    /// green
    it('should return undefined because green is not a number', function () {

        let actual = undefined;
        let expected = rgbToHexColor(10, 'asdwwdas', 12);

        expect(expected).to.be.undefined;
    });
    it('should return undefined because green is less then zero', function () {

        let actual = undefined;
        let expected = rgbToHexColor(10, -1, 12);

        expect(expected).to.be.undefined;
    });
    it('should return undefined because green is bigger then 255', function () {

        let actual = undefined;
        let expected = rgbToHexColor(255, 256, 12);

        expect(expected).to.be.undefined;
    });

    // blue undefined

    it('should return undefined because blue is not a number', function () {

        let actual = undefined;
        let expected = rgbToHexColor(10, 12,'dasdasd');

        expect(expected).to.be.undefined;
    });
    it('should return undefined because blue is less then zero', function () {

        let actual = undefined;
        let expected = rgbToHexColor(10, 123, -1);

        expect(expected).to.be.undefined;
    });
    it('should return undefined because blue is bigger then 255', function () {

        let actual = undefined;
        let expected = rgbToHexColor(255, 255, 256);

        expect(expected).to.be.undefined;
    });


    it('should return correct result', function () {

        let actual = '#0A0A0A';
        let expected = rgbToHexColor(10, 10, 10)
        expect(actual).to.be.equal(expected);
    });

    it('should return correct hexColor', function () {
        let expected = '#FF9EAA';
        let actual = rgbToHexColor(255, 158, 170);
        expect(actual).to.be.equal(expected);

        expected = '#000000';
        actual = rgbToHexColor(0, 0, 0);
        expect(actual).to.be.equal(expected);

        expected = '#FFFFFF';
        actual = rgbToHexColor(255, 255, 255);
        expect(actual).to.be.equal(expected);
    });
});