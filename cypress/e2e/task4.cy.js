/// <reference types="cypress" />
import keys from '../fixtures/keyboard.json'
import urls from '../fixtures/urls.json'


describe('#4 Word validation', () => {
    beforeEach(() => {
        cy.newGameSuccessful()
        cy.visitUrl(urls.localhost)
        cy.wait('@gameSuccessful')
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
        cy.typeWord(keys.queso)
        cy.checkResultBoxText(keys.queso)
        cy.clickResultBox(3)
        cy.deleteLetter()
        cy.checkResultBoxText(keys.quso)
    });

    it('Check delete first letter', () => {
        cy.typeWord(keys.queso)
        cy.checkResultBoxText(keys.queso)
        cy.clickResultBox(1)
        cy.deleteLetter()
        cy.checkResultBoxText(keys.queso.substring(1))
    });

    it('Check letters correct', () => {
        
    });
    
  });