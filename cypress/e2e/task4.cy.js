/// <reference types="cypress" />
import keys from '../fixtures/keyboard.json'
import urls from '../fixtures/urls.json'


describe('#4 Word validation', () => {
    beforeEach(() => {
        cy.visitUrl(urls.localhost)
        cy.acceptNewGameErrorAlert()
    });
  
    it('Check 5 letters boxes', () => {
      cy.checkFiveResultBoxes()
    });

    it('Check order of letters', () => {
        cy.typeWord(keys.queso)
        cy.checkResultBoxText(keys.queso)
    });

    it('Check delete letters in order', () => {
        cy.typeWord(keys.queso)
        cy.checkResultBoxText(keys.queso)
        cy.deleteWord(keys.queso)
        cy.checkResultBoxText('')
    })

    it('Check delete letter selected', () => {
        
    });

    it('Check delete first letter', () => {
        
    });

    it('Check letters correct', () => {
        
    });
    
  });