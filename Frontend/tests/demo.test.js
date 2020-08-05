// import npm
import { expect } from 'chai';

// Code
const value = 2;

function addition(a, b) {
  return a + b;
}

// Tests

// Describe me permet de définir une série/ un chapitre de tests
describe('Tests de démo', () => {
  describe('Série de tests : addition', () => {
    // 1er test
    it('expected to be a function', () => {
      // L'assertion à vérifier
      expect(addition).to.be.a('function');
    });

    // 2eme test (dans la meme série)
    it('expected to return sum of parameters', () => {
      expect(addition(1, 2)).to.be.equal(3);
    });

    // Status pending, pas d'assertions à tester
    it('should ...');
  });
});
