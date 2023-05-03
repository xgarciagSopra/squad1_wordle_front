/// <reference types="cypress" />
import keys from '../fixtures/keyboard.json'
import word from '../fixtures/words.json'

let idGame

describe('#4 Word validation', () => {
    beforeEach(() => {
        cy.newGameSuccessful()
        cy.goToLandingPage()
        idGame = cy.getGameLoaded()
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
        cy.checkResultBoxLetter(3,word.space)
        cy.checkResultBoxText(word.quso)
    });

    it('Check delete first letter', () => {
        cy.typeWord(word.queso)
        cy.checkResultBoxText(word.queso)
        cy.clickResultBox(1)
        cy.deleteLetter()
        cy.checkResultBoxLetter(1,word.space)
        cy.checkResultBoxText(word.ueso)
    });

    it('Check letters status change', () => {
        cy.interceptWord(word.queso,idGame)
        cy.typeWord(word.queso)
        cy.checkResultBoxText(word.queso)
        cy.sendForm()
        cy.wait('@interceptWord')
        cy.checkRecultBoxesStatusChange()
        cy.checkKeyBoardStatus(word.queso)
    });
    
  });