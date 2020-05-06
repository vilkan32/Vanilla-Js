let PaymentPackage = require('./PaymentPackage').PaymentPackage;
let expect = require('chai').expect;

describe('payment package should work correctly', function () {

    it('should check constructor', function () {

        let pack = new PaymentPackage('payment', 1000);

        expect(pack.name).to.be.equal('payment');

        expect(pack.value).to.be.equal(1000);

        expect(pack.VAT).to.be.equal(20);

        expect(pack.active).to.be.equal(true);

    });

    it('should check name setter', function () {
        let pack = new PaymentPackage('payment', 1000);
        expect(()=>{
            pack.name = '';
        }).to.throw(Error);

        expect(()=>{
            pack.name = [1,2,3]
        }).to.throw(Error);

        expect(()=>{
            pack.name = {name: 'Peter'}
        }).to.throw(Error);

        expect(()=>{
            pack.name = 123;
        }).to.throw(Error);

        pack.name = 'PayCheck';

        expect(pack.name).to.be.equal('PayCheck');
    });

    it('should check value setter and getter', function () {
        let pack = new PaymentPackage('payment', 1000);
        expect(()=>{
            pack.value = '';
        }).to.throw(Error);

        expect(()=>{
            pack.value = [1,2,3]
        }).to.throw(Error);

        expect(()=>{
            pack.value = {name: 'Peter'}
        }).to.throw(Error);

        expect(()=>{
            pack.value = 'asdasd';
        }).to.throw(Error);

        expect(()=>{
            pack.value = -1;
        }).to.throw(Error);

        pack.value = 100;

        expect(pack.value).to.be.equal(100);

        pack.value = 0;

        expect(pack.value).to.be.equal(0);
    });

    it('should check vat setters and getters', function () {
        let pack = new PaymentPackage('payment', 1000);
        expect(()=>{
            pack.VAT = '';
        }).to.throw(Error);

        expect(()=>{
            pack.VAT = [1,2,3]
        }).to.throw(Error);

        expect(()=>{
            pack.VAT = {name: 'Peter'}
        }).to.throw(Error);

        expect(()=>{
            pack.VAT = 'asdasd';
        }).to.throw(Error);

        expect(()=>{
            pack.VAT = -1;
        }).to.throw(Error);

        pack.VAT = 100;

        expect(pack.VAT).to.be.equal(100);
    });

    it('should check status getters and setters', function () {
        let pack = new PaymentPackage('payment', 1000);
        expect(()=>{
            pack.active = '';
        }).to.throw(Error);

        expect(()=>{
            pack.active = [1,2,3]
        }).to.throw(Error);

        expect(()=>{
            pack.active = {name: 'Peter'}
        }).to.throw(Error);

        expect(()=>{
            pack.active = 'asdasd';
        }).to.throw(Error);

        expect(()=>{
            pack.active = -1;
        }).to.throw(Error);

        pack.active = false;

        expect(pack.active).to.be.equal(false);
    });

    it('should check tostring function', function () {
        let pack = new PaymentPackage('payment', 1000);

        expect(pack.toString()).to.be.equal('Package: payment\n- Value (excl. VAT): 1000\n- Value (VAT 20%): 1200');

        pack.active = false;

        expect(pack.toString()).to.be.equal('Package: payment (inactive)\n- Value (excl. VAT): 1000\n- Value (VAT 20%): 1200');
    });

});