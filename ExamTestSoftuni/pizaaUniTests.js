let PizzUni = require('./pizzaLab').PizzUni;

let expect = require('chai').expect;

describe('pizzauni should work as expected', function () {

    describe('it should test the constructor', function () {
        it('should test the constructor', function () {

            let pizza = new PizzUni();

            expect(JSON.stringify(pizza.registeredUsers)).to.be.equal('[]');
            expect(JSON.stringify(pizza.availableProducts)).to.be.equal('{"pizzas":["Italian Style","Barbeque Classic","Classic Margherita"],"drinks":["Coca-Cola","Fanta","Water"]}');
            expect(JSON.stringify(pizza.orders)).to.be.equal('[]');

        });

    });

    describe('it should register user in the restaurant', function () {

        let pizza;
        beforeEach(() =>{
            pizza  = new PizzUni();
        });

        it('should register some users', function () {

            expect(JSON.stringify(pizza.registerUser('some@abv.bg'))).to.be.equal('{"email":"some@abv.bg","orderHistory":[]}');
            expect(pizza.registeredUsers.length).to.be.equal(1);
            expect(JSON.stringify(pizza.registeredUsers)).to.be.equal('[{"email":"some@abv.bg","orderHistory":[]}]');

        });

        it('should throw an error when registering the same user', function () {
            pizza.registerUser('some@abv.bg');
            expect(() => {
                pizza.registerUser('some@abv.bg')
            }).to.throw(Error, `This email address (some@abv.bg) is already being used!`)

        });
    });
    
    describe('make order functionality', function () {

        let pizza;
        beforeEach(() =>{
            pizza  = new PizzUni();
            pizza.registerUser('some@abv.bg')
        });


        it('should throw error for no registration', function () {

            expect(() => {
                pizza.makeAnOrder('asdasd', 'asdasd', 'asdasd');
            }).to.throw(Error, `You must be registered to make orders!`);
        });

        it('should thro error for incorrect pizza', function () {
            expect(() => {
                pizza.makeAnOrder('some@abv.bg', 'asdasd', 'asdasd');
            }).to.throw(Error, `You must order at least 1 Pizza to finish the order.`);
        });

        it('should reflect in the user order history', function () {
            pizza.makeAnOrder('some@abv.bg', 'Barbeque Classic','Water');

            expect(JSON.stringify(pizza.registeredUsers)).to.be.equal('[{"email":"some@abv.bg","orderHistory":[{"orderedPizza":"Barbeque Classic","orderedDrink":"Water"}]}]');
        });

        it('should reflect in the orders', function () {
            pizza.makeAnOrder('some@abv.bg', 'Barbeque Classic','Water');
            expect(JSON.stringify(pizza.orders)).to.be.equal('[{"orderedPizza":"Barbeque Classic","orderedDrink":"Water","email":"some@abv.bg","status":"pending"}]');
        });

        it('should return the correct result', function () {
            expect(JSON.stringify(pizza.makeAnOrder('some@abv.bg', 'Barbeque Classic','Water'))).to.be.equal("0");
        });
    });
    
    describe('detailsAbout order', function () {
        let pizza;
        beforeEach(() =>{
            pizza  = new PizzUni();
            pizza.registerUser('some@abv.bg');
            pizza.makeAnOrder('some@abv.bg', 'Barbeque Classic', 'asdasd');
        });

        it('should return details about an order', function () {
            expect(pizza.detailsAboutMyOrder(0)).to.be.equal('Status of your order: pending');
            expect(pizza.detailsAboutMyOrder(1)).to.be.undefined;
        });
    });

    describe('doest the user exist', function () {
        let pizza;
        beforeEach(() =>{
            pizza  = new PizzUni();
            pizza.registerUser('some@abv.bg');
            pizza.makeAnOrder('some@abv.bg', 'Barbeque Classic', 'asdasd');
        });

        it('should return an existing user', function () {
            expect(JSON.stringify(pizza.doesTheUserExist('some@abv.bg'))).to.be.equal('{"email":"some@abv.bg","orderHistory":[{"orderedPizza":"Barbeque Classic"}]}');
        });

        it('should return something for undexisting', function () {
            expect(JSON.stringify(pizza.doesTheUserExist('some22@abv.bg'))).to.be.undefined;
        });

    });


    describe('complete the order', function () {
        let pizza;
        beforeEach(() =>{
            pizza  = new PizzUni();
            pizza.registerUser('some@abv.bg');
            pizza.makeAnOrder('some@abv.bg', 'Barbeque Classic', 'asdasd');
        });

        it('should complete the order', function () {
            expect(JSON.stringify(pizza.completeOrder())).to.be.equal('{"orderedPizza":"Barbeque Classic","email":"some@abv.bg","status":"completed"}');
            expect(() => {
                pizza.completeOrder()
            }).to.throw(TypeError);
        });

        it('should complete another order', function () {
            pizza.registerUser('some12@abv.bg');
            pizza.makeAnOrder('some12@abv.bg', 'Italian Style');
            expect(JSON.stringify(pizza.completeOrder())).to.be.equal('{"orderedPizza":"Barbeque Classic","email":"some@abv.bg","status":"completed"}');
            expect(JSON.stringify(pizza.completeOrder())).to.be.equal('{"orderedPizza":"Italian Style","email":"some12@abv.bg","status":"completed"}');
        });

    });


});