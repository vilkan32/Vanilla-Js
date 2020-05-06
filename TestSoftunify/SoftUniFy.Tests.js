let SoftUniFy = require('./softunify').SoftUniFy;
let expect = require('chai').expect;

describe('SoftUniFy should work as expected', function () {

    describe('SoftUniFy test constructor', function () {

        it('should initialize empty obj', function () {

            let soft = new SoftUniFy();

            expect(JSON.stringify(soft.allSongs)).to.be.equal(JSON.stringify({}));
            expect(soft.songsList).to.be.equal('Your song list is empty');

        });

    });


    describe('downloading song', function () {
        let soft;

        beforeEach(() => {
           soft = new SoftUniFy();
        });

        it('should download song', function () {



           expect(JSON.stringify(soft.downloadSong('EMInem', 'Kamikadze', 'bla bla bla'))).to.be.equal('{"allSongs":{"EMInem":{"rate":0,"votes":0,"songs":["Kamikadze - bla bla bla"]}}}')
        });

        it('should download many songs', function () {

            soft.downloadSong('EMInem', 'MockingBird', 'bla bla bla');
            soft.downloadSong('EMInem', 'Superman', 'bla bla bla');
            soft.downloadSong('EltanJon', 'Sayit', 'bla bla bla');

            expect(JSON.stringify(soft.downloadSong('Joe Jones', 'No more', 'bla bla bla'))).to.be.equal('{"allSongs":{"EMInem":{"rate":0,"votes":0,"songs":["MockingBird - bla bla bla","Superman - bla bla bla"]},"EltanJon":{"rate":0,"votes":0,"songs":["Sayit - bla bla bla"]},"Joe Jones":{"rate":0,"votes":0,"songs":["No more - bla bla bla"]}}}');
        });

        it('should download many songs and return list', function () {

            soft.downloadSong('EMInem', 'MockingBird', 'bla bla bla');
            soft.downloadSong('EMInem', 'Superman', 'bla bla bla');
            soft.downloadSong('EltanJon', 'Sayit', 'bla bla bla');

            expect(soft.songsList).to.be.equal('MockingBird - bla bla bla\nSuperman - bla bla bla\nSayit - bla bla bla');

        });


    });

    describe('playSong', function () {
        let soft;
        beforeEach(() => {
            soft = new SoftUniFy();
            soft.downloadSong('EMInem', 'MockingBird', 'bla bla bla');
            soft.downloadSong('EMInem', 'Superman', 'bla bla bla');
            soft.downloadSong('EltanJon', 'Sayit', 'bla bla bla');
        });

        it('should play the required song', function () {
            expect(soft.playSong('Superman')).to.be.equal('EMInem:\nSuperman - bla bla bla\n');
        });

        it('should should play song that is found 2 times', function () {
            soft.downloadSong('Helicopter', 'Superman', 'bla bla bla');
            expect(soft.playSong('Superman')).to.be.equal('EMInem:\nSuperman - bla bla bla\nHelicopter:\nSuperman - bla bla bla\n');
        });

        it('should return string with message that it is empty', function () {

            soft = new SoftUniFy();

           expect( soft.playSong('Whatever')).to.be.equal('You have not downloaded a Whatever song yet. Use SoftUniFy\'s function downloadSong() to change that!');
        });
    });


    describe('getSongList functionality', function () {
        let soft;
        beforeEach(() => {
            soft = new SoftUniFy();
            soft.downloadSong('EMInem', 'MockingBird', 'bla bla bla');
            soft.downloadSong('EMInem', 'Superman', 'bla bla bla');
            soft.downloadSong('EltanJon', 'Sayit', 'bla bla bla');
        });

        it('should return the correct songs', function () {

            expect(soft.songsList).to.be.equal('MockingBird - bla bla bla\nSuperman - bla bla bla\nSayit - bla bla bla');

        });

        it('should return even more songs from different singers', function () {
            soft.downloadSong('Filipines', 'CmonCmon', 'la la la la');
            soft.downloadSong('Madonna', 'Do it ...', 'yayayay');
            expect(soft.songsList).to.be.equal('MockingBird - bla bla bla\nSuperman - bla bla bla\nSayit - bla bla bla\nCmonCmon - la la la la\nDo it ... - yayayay');
        });

        it('should return message for empty list', function () {
            soft = new SoftUniFy();
            expect(soft.songsList).to.be.equal('Your song list is empty');
        });

    });

    describe('rate artist funtionality', function () {
        let soft;
        beforeEach(() => {
            soft = new SoftUniFy();
            soft.downloadSong('EMInem', 'MockingBird', 'bla bla bla');
            soft.downloadSong('EMInem', 'Superman', 'bla bla bla');
            soft.downloadSong('EltanJon', 'Sayit', 'bla bla bla');
            soft.rateArtist('EMInem', 10);
        });


        it('should rate the artists appropriately', function () {
            expect(soft.rateArtist('EMInem', 10)).to.be.equal(10)
        });

        it('should rate the artist with one property', function () {

            expect(soft.rateArtist('EMInem')).to.be.equal(10)
        });

        it('should rate the artist with wrong second param', function () {
            expect(soft.rateArtist('EMInem', 'shuriken')).to.be.equal(0);
            expect(soft.rateArtist('EMInem')).to.be.equal(0);
            expect(soft.rateArtist('EMInem', 10)).to.be.equal(0);
        });

        it('should return string for non existing artist', function () {
            expect(soft.rateArtist('KaKA', 5)).to.be.equal('The KaKA is not on your artist list.');
        });
    });


});