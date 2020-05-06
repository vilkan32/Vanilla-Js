let Warehouse = require('./Warehouse').Warehouse;

let expect = require('chai').expect;

describe('warehouse should work correctly', function () {

    describe('it is required', function () {
        it('should check construtor', function () {

            let warehouse = new Warehouse(20);

            expect(warehouse.capacity).to.be.equal(20);

            expect(JSON.stringify(warehouse.availableProducts)).to.be.equal('{"Food":{},"Drink":{}}');

            warehouse.capacity = 10;

            expect(warehouse.capacity).to.be.equal(10);

            expect(()=>{
                new Warehouse('asdasd')
            }).throw('Invalid given warehouse space');

            expect(()=>{
                new Warehouse(0)
            }).throw('Invalid given warehouse space');
            expect(()=>{
                new Warehouse([1,2,3])
            }).throw('Invalid given warehouse space');
        });
    });

    describe('it is required', function () {

        let warehouse;

        beforeEach(function () {

            warehouse = new Warehouse(10);
        });

        it('should check construtor', function () {

            let warehouse = new Warehouse(20);

            expect(warehouse.capacity).to.be.equal(20);

            expect(JSON.stringify(warehouse.availableProducts)).to.be.equal('{"Food":{},"Drink":{}}');

            warehouse.capacity = 10;

            expect(warehouse.capacity).to.be.equal(10);

            expect(()=>{
                new Warehouse('asdasd')
            }).throw('Invalid given warehouse space');

            expect(()=>{
                new Warehouse(0)
            }).throw('Invalid given warehouse space');
            expect(()=>{
                new Warehouse([1,2,3])
            }).throw('Invalid given warehouse space');
        });
    });



    describe('it is required', function () {
        it('should check add product', function () {
            let warehouse = new Warehouse(20);

            expect(JSON.stringify(warehouse.addProduct('Food', 'Cereal', 2))).to.be.equal('{"Cereal":2}');
            expect(warehouse.availableProducts['Food']['Cereal']).to.be.equal(2);
            warehouse.addProduct('Food', 'Cereal', 2);

            expect(warehouse.availableProducts['Food']['Cereal']).to.be.equal(4);

            expect(()=>{
                warehouse.addProduct('Food', 'Beans', 17)
            }).to.throw(`There is not enough space or the warehouse is already full`)
        });
    });
    describe('it is required', function () {
        let warehouse;

        beforeEach(function () {

            warehouse = new Warehouse(10);
        });

        it('should check add product', function () {
            let warehouse = new Warehouse(20);

            expect(JSON.stringify(warehouse.addProduct('Food', 'Cereal', 2))).to.be.equal('{"Cereal":2}');
            expect(warehouse.availableProducts['Food']['Cereal']).to.be.equal(2);
            warehouse.addProduct('Food', 'Cereal', 2);

            expect(warehouse.availableProducts['Food']['Cereal']).to.be.equal(4);

            expect(()=>{
                warehouse.addProduct('Food', 'Beans', 17)
            }).to.throw(`There is not enough space or the warehouse is already full`)
        });
    });

    describe('it is required', function () {
        it('should order products', function () {
            let warehouse = new Warehouse(20);
            warehouse.addProduct('Food', 'Cereal', 2);
            warehouse.addProduct('Food', 'Beans', 4);
            warehouse.addProduct('Food', 'Banana',3);

            expect(JSON.stringify(warehouse.orderProducts('Food'))).to.be.equal('{"Beans":4,"Banana":3,"Cereal":2}');
            expect(JSON.stringify(warehouse.availableProducts['Food'])).to.be.equal('{"Beans":4,"Banana":3,"Cereal":2}');
        });
    });

    describe('it is required', function () {
        let warehouse;

        beforeEach(function () {

            warehouse = new Warehouse(10);
        });

        it('should order products', function () {
            let warehouse = new Warehouse(20);
            warehouse.addProduct('Food', 'Cereal', 2);
            warehouse.addProduct('Food', 'Beans', 4);
            warehouse.addProduct('Food', 'Banana',3);

            expect(JSON.stringify(warehouse.orderProducts('Food'))).to.be.equal('{"Beans":4,"Banana":3,"Cereal":2}');
            expect(JSON.stringify(warehouse.availableProducts['Food'])).to.be.equal('{"Beans":4,"Banana":3,"Cereal":2}');
        });
    });
    describe('it is required', function () {
        it('should check occupeied capacity', function () {

            let warehouse = new Warehouse(20);

            expect(warehouse.occupiedCapacity()).to.be.equal(0);

            warehouse.addProduct('Food', 'Cereal', 2);
            warehouse.addProduct('Food', 'Beans', 4);
            warehouse.addProduct('Food', 'Banana',3);

            expect(warehouse.occupiedCapacity()).to.be.equal(9);
        });
    });
    describe('it is required', function () {
        let warehouse;

        beforeEach(function () {

            warehouse = new Warehouse(10);
        });


        it('should check occupeied capacity', function () {

            let warehouse = new Warehouse(20);

            expect(warehouse.occupiedCapacity()).to.be.equal(0);

            warehouse.addProduct('Food', 'Cereal', 2);
            warehouse.addProduct('Food', 'Beans', 4);
            warehouse.addProduct('Food', 'Banana',3);

            expect(warehouse.occupiedCapacity()).to.be.equal(9);
        });
    });
    describe('it is required', function () {
        it('should check revision', function () {
            let warehouse = new Warehouse(20);
            expect(warehouse.revision()).to.be.equal('The warehouse is empty');
            warehouse.addProduct('Food', 'Cereal', 2);
            warehouse.addProduct('Food', 'Beans', 4);
            warehouse.addProduct('Food', 'Banana',3);
            expect(warehouse.revision()).to.be.equal('Product type - [Food]\n- Cereal 2\n- Beans 4\n- Banana 3\nProduct type - [Drink]');
        });

    });

    describe('it is required', function () {

        let warehouse;

        beforeEach(function () {

            warehouse = new Warehouse(10);
        });

        it('should check revision', function () {
            let warehouse = new Warehouse(20);
            expect(warehouse.revision()).to.be.equal('The warehouse is empty');
            warehouse.addProduct('Food', 'Cereal', 2);
            warehouse.addProduct('Food', 'Beans', 4);
            warehouse.addProduct('Food', 'Banana',3);
            expect(warehouse.revision()).to.be.equal('Product type - [Food]\n- Cereal 2\n- Beans 4\n- Banana 3\nProduct type - [Drink]');
        });

    });
    describe('it is required', function () {
        it('should check scrape a product', function () {
            let warehouse = new Warehouse(20);

            expect(()=>{
                warehouse.scrapeAProduct('Beer', 10)
            }).to.throw(`Beer do not exists`);

            warehouse.addProduct('Food', 'Cereal', 2);
            warehouse.addProduct('Food', 'Beans', 4);
            warehouse.addProduct('Food', 'Banana',3);

            warehouse.scrapeAProduct('Beans', 2);
            expect(warehouse.availableProducts['Food']['Beans']).to.be.equal(2);

            warehouse.scrapeAProduct('Beans', 5);

            expect(warehouse.availableProducts['Food']['Beans']).to.be.equal(0);
        });
    });
    describe('it is required', function () {

        let warehouse;

        beforeEach(function () {

            warehouse = new Warehouse(10);
        });
        it('should check scrape a product', function () {
            let warehouse = new Warehouse(20);

            expect(()=>{
                warehouse.scrapeAProduct('Beer', 10)
            }).to.throw(`Beer do not exists`);

            warehouse.addProduct('Food', 'Cereal', 2);
            warehouse.addProduct('Food', 'Beans', 4);
            warehouse.addProduct('Food', 'Banana',3);

            warehouse.scrapeAProduct('Beans', 2);
            expect(warehouse.availableProducts['Food']['Beans']).to.be.equal(2);

            warehouse.scrapeAProduct('Beans', 5);

            expect(warehouse.availableProducts['Food']['Beans']).to.be.equal(0);
        });
    });

});