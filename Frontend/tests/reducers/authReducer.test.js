import { expect } from 'chai';

import authReducer from '../../src/reducers/auth';

describe('Testing authReducer', ()=> {
  describe('#structure', () => {
    it('expected to be a function', () => {
      expect(authReducer).to.be.a('function');
    });
    it('expected to return an object which has property isConnected false', () => {
      expect(authReducer()).to.be.an('object')
        .which.has.a.property('isConnected', false);
    });
    it('expected to return an object which has property isNewMember false', () => {
      expect(authReducer()).to.be.an('object')
        .which.has.a.property('isNewMember', false);
    });
    it('expected to return an object which has property emailHasBeenSent false', () => {
      expect(authReducer()).to.be.an('object')
        .which.has.a.property('emailHasBeenSent', false);
    });
    it('expected to return an object which has property newPasswordIsRegistered false', () => {
      expect(authReducer()).to.be.an('object')
        .which.has.a.property('newPasswordIsRegistered', false);
    });
  });
});
