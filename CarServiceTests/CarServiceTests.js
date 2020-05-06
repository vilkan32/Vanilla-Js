let AutoService = require('./CarService').AutoService;

let expect = require('chai').expect;


describe('wrap AutoService tests', function () {
   
    describe('Check constructor', function () {
        let service;
        beforeEach(() => {
            service = new AutoService(4);
        });

        it('should check the constructor', function () {
            expect(service.garageCapacity).to.be.equal(4);
            expect(JSON.stringify(service.workInProgress)).to.be.equal('[]');
            expect(JSON.stringify(service.backlogWork)).to.be.equal('[]');
            expect(service.workInProgress.length).to.be.equal(0);
            expect(service.backlogWork.length).to.be.equal(0);
        });
    });
    
    describe('check getter for available space', function () {
        let service;
        beforeEach(() => {
            service = new AutoService(4);
        });
        it('should check the available space in the garrage', function () {
            expect(service.availableSpace).to.be.equal(4);
        });

        it('should check available space in garrage when adding cars', function () {
            service.signUpForReview('Peter', 'CA1234CA', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken'});
            service.signUpForReview('Peter', 'CA1234CA', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken', 'wheels': 'broken', 'tires': 'broken'});
            service.signUpForReview('Philip', 'PB4321PB', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'exaustPipe': 'REMUS'});
            service.signUpForReview('Vaso', 'CA1234CA', {'engine': 'broken', 'transmission': 'FF4418ZZ', 'doors': 'white'});
            expect(service.availableSpace).to.be.equal(0);
            expect(JSON.stringify(service.workInProgress)).to.be.equal('[{"plateNumber":"CA1234CA","clientName":"Peter","carInfo":{"engine":"MFRGG23","transmission":"FF4418ZZ","doors":"broken"}},{"plateNumber":"CA1234CA","clientName":"Peter","carInfo":{"engine":"MFRGG23","transmission":"FF4418ZZ","doors":"broken","wheels":"broken","tires":"broken"}},{"plateNumber":"PB4321PB","clientName":"Philip","carInfo":{"engine":"MFRGG23","transmission":"FF4418ZZ","exaustPipe":"REMUS"}},{"plateNumber":"CA1234CA","clientName":"Vaso","carInfo":{"engine":"broken","transmission":"FF4418ZZ","doors":"white"}}]');
            expect(service.backlogWork.length).to.be.equal(0);
        });
    });

    describe('repair car functionality check', function () {
        let service;
        beforeEach(() => {
            service = new AutoService(4);
            service.signUpForReview('Peter', 'CA1234CA', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken'});
            service.signUpForReview('Peter', 'CA1234CA', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken', 'wheels': 'broken', 'tires': 'broken'});
            service.signUpForReview('Philip', 'PB4321PB', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'exaustPipe': 'REMUS'});
            service.signUpForReview('Vaso', 'CA1234CA', {'engine': 'broken', 'transmission': 'FF4418ZZ', 'doors': 'white'});

        });

        it('should repair the cars one by one as expected', function () {

            expect(service.repairCar()).to.be.equal('Your doors were repaired.');
            expect(service.repairCar()).to.be.equal('Your doors and wheels and tires were repaired.');
            expect(service.repairCar()).to.be.equal('Your car was fine, nothing was repaired.');
            expect(service.repairCar()).to.be.equal('Your engine were repaired.');
            expect(service.repairCar()).to.be.equal('No clients, we are just chilling...');
        });

        it('should repair cars that are in the backlog', function () {
            service.signUpForReview('Kaso', 'CA1234CA', {'engine': 'broken', 'transmission': 'FF4418ZZ', 'doors': 'white'});
            expect(service.backlogWork.length).to.be.equal(1);
            expect(JSON.stringify(service.backlogWork)).to.be.equal('[{"plateNumber":"CA1234CA","clientName":"Kaso","carInfo":{"engine":"broken","transmission":"FF4418ZZ","doors":"white"}}]');
            expect(service.repairCar()).to.be.equal('Your doors were repaired.');
            expect(service.repairCar()).to.be.equal('Your doors and wheels and tires were repaired.');
            expect(service.repairCar()).to.be.equal('Your car was fine, nothing was repaired.');
            expect(service.repairCar()).to.be.equal('Your engine were repaired.');
            expect(service.repairCar()).to.be.equal('Your engine were repaired.');
            expect(service.repairCar()).to.be.equal('No clients, we are just chilling...');
        });

    });
    
    describe('sign up for review functionality tests', function () {
        let service;
        beforeEach(() => {
            service = new AutoService(4);
            service.signUpForReview('Peter', 'CA1234CA', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken'});
            service.signUpForReview('Peter', 'CA1234CA', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken', 'wheels': 'broken', 'tires': 'broken'});
            service.signUpForReview('Philip', 'PB4321PB', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'exaustPipe': 'REMUS'});
            service.signUpForReview('Vaso', 'CA1234CA', {'engine': 'broken', 'transmission': 'FF4418ZZ', 'doors': 'white'});

        });


        it('should add cars to work in progress', function () {
            expect(JSON.stringify(service.workInProgress)).to.be.equal('[{"plateNumber":"CA1234CA","clientName":"Peter","carInfo":{"engine":"MFRGG23","transmission":"FF4418ZZ","doors":"broken"}},{"plateNumber":"CA1234CA","clientName":"Peter","carInfo":{"engine":"MFRGG23","transmission":"FF4418ZZ","doors":"broken","wheels":"broken","tires":"broken"}},{"plateNumber":"PB4321PB","clientName":"Philip","carInfo":{"engine":"MFRGG23","transmission":"FF4418ZZ","exaustPipe":"REMUS"}},{"plateNumber":"CA1234CA","clientName":"Vaso","carInfo":{"engine":"broken","transmission":"FF4418ZZ","doors":"white"}}]');
        });

        it('should add cars to backlog', function () {
            service.signUpForReview('Kaso', 'CA1234CA', {'engine': 'broken', 'transmission': 'FF4418ZZ', 'doors': 'white'});
            expect(JSON.stringify(service.backlogWork)).to.be.equal('[{"plateNumber":"CA1234CA","clientName":"Kaso","carInfo":{"engine":"broken","transmission":"FF4418ZZ","doors":"white"}}]')
        });

    });

    describe('carInfo functionality should be returned as expected', function () {
        let service;
        beforeEach(() => {
            service = new AutoService(4);
            service.signUpForReview('Peter', 'CA1234CA', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken'});
            service.signUpForReview('Peter', 'CA1234CA', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken', 'wheels': 'broken', 'tires': 'broken'});
            service.signUpForReview('Philip', 'PB4321PB', {'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'exaustPipe': 'REMUS'});
            service.signUpForReview('Vaso', 'CA1234CA', {'engine': 'broken', 'transmission': 'FF4418ZZ', 'doors': 'white'});

        });


        it('should return the correct cars', function () {
            expect(JSON.stringify(service.carInfo('CA1234CA', 'Peter'))).to.be.equal('{"plateNumber":"CA1234CA","clientName":"Peter","carInfo":{"engine":"MFRGG23","transmission":"FF4418ZZ","doors":"broken"}}');
            expect(JSON.stringify(service.carInfo('PB4321PB', 'Philip'))).to.be.equal('{"plateNumber":"PB4321PB","clientName":"Philip","carInfo":{"engine":"MFRGG23","transmission":"FF4418ZZ","exaustPipe":"REMUS"}}');
        });

        it('should return string for not having the car required', function () {

            service = new AutoService(2);

            expect(service.carInfo('CA1234CA','Peter')).to.be.equal('There is no car with platenumber CA1234CA and owner Peter.');
        });

    });
});