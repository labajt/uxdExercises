import React from 'react'
i//mport expect from 'chai';
import UsersListview from '../src/UsersListview';

describe('App Test', function() {
  describe('(Component) UsersListview', () => {
    it('renders...', () => {
      expect(wrapper).to.have.length(1);
    });
  });
});


// describe('App Test', function() {

//   describe('remoteMathService', function() {
//     it('err should be undefined', function(done) {
//         remoteMathService(function (err, answer) {
//           expect(err).to.be.undefined;
//           done();
//           });
//     });

//     it('answer should be 3', function(done) {
//         remoteMathService(function (err, answer) {
//           expect(answer).to.equal(3);
//           done();
//           });
//     })

//   });

//   describe('callOneService', function() {
//     it('returns call function with 1 for value', function(done) {
//       callOneService(function (err, num) {
//           expect(num).to.equal(1);
//           done();
//           });
//     });

//     it('returns call function with err undefined', function(done) {
//       callOneService(function (err, num) {
//         expect(err).to.be.undefined;
//           done();
//           });
//     });
//   });

//   describe('callTwoService', function() {
//     it('returns call function with 1 for value', function(done) {
//       callTwoService(function (err, num) {
//           expect(num).to.equal(2);
//           done();
//           });
//     });

//     it('returns call function with err undefined', function(done) {
//       callTwoService(function (err, num) {
//         expect(err).to.be.undefined;
//           done();
//           });
//     });
//   });

// });