/// <reference types="cypress" />
import keys from '../fixtures/keyboard.json'
import word from '../fixtures/words.json'


describe('#4 Word validation', () => {
    beforeEach(() => {
        cy.newGameSuccessful()
        cy.goToLandingPage()
        cy.waitGame()
    });
  
    it('Check 5 letters boxes', () => {
      cy.checkFiveResultBoxes()
    });

    it('Check order of letters', () => {
        cy.typeWord(word.queso)
        cy.checkResultBoxText(word.queso)
    });

    it('Check delete letters in order', () => {
        cy.typeWord(word.queso)
        cy.checkResultBoxText(word.queso)
        cy.deleteWord(word.queso)
        cy.checkResultBoxText(word.void)
    })

    it('Check delete letter selected', () => {
        cy.typeWord(word.queso)
        cy.checkResultBoxText(word.queso)
        cy.clickResultBox(3)
        cy.deleteLetter()
        cy.checkResultBoxText(word.quso)
    });

    it('Check delete first letter', () => {
        cy.typeWord(word.queso)
        cy.checkResultBoxText(word.queso)
        cy.clickResultBox(1)
        cy.deleteLetter()
        cy.checkResultBoxText(word.queso.substring(1))
    });

    it('Check letters status change', () => {
        cy.interceptWord(word.queso)
        cy.typeWord(word.queso)
        cy.checkResultBoxText(word.queso)
        cy.sendForm()
        cy.wait('@interceptWord')
        cy.checkRecultBoxesStatusChange()
        cy.checkKeyBoardStatus(word.queso)
    });
    
  });