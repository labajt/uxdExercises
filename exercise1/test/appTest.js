const chai = require('chai');
const expect = chai.expect;
const remoteMathService = require('../src/app').remoteMathService;
const callOneService = require('../src/app').callOneService;
const callTwoService = require('../src/app').callTwoService;


describe('App Test', function() {

  describe('remoteMathService', function() {
    it('err should be undefined', function(done) {
        remoteMathService(function (err, answer) {
          expect(err).to.be.undefined;
          done();
          });
    });

    it('answer should be 3', function(done) {
        remoteMathService(function (err, answer) {
          expect(answer).to.equal(3);
          done();
          });
    })
  });

  describe('callOneService', function() {
    it('returns call function with 1 for value', function(done) {
      callOneService(function (err, num) {
          expect(num).to.equal(1);
          done();
          });
    });

    it('returns call function with err undefined', function(done) {
      callOneService(function (err, num) {
        expect(err).to.be.undefined;
          done();
          });
    });
  });

  describe('callTwoService', function() {
    it('returns call function with 1 for value', function(done) {
      callTwoService(function (err, num) {
          expect(num).to.equal(2);
          done();
          });
    });

    it('returns call function with err undefined', function(done) {
      callTwoService(function (err, num) {
        expect(err).to.be.undefined;
          done();
          });
    });
  });

});