/// <reference types="cypress" />
import word from '../fixtures/words.json'


describe('#6 Limit game to 5 attempts', () => {
    beforeEach(() => {
        cy.forceNewGameSuccessful().as('forceGameSuccessful')
        cy.goToLandingPage()
        cy.waitUntilGameLoaded()
    });

    it('Check letters status change', () => {
        cy.typeWord(word.queso)
        cy.checkResultBoxText(word.queso)
        cy.sendForm()
        cy.checkRecultBoxesStatusChange()
        cy.checkKeyBoardStatus(word.queso)
    });

    it('Check create a new row if word fail', () => {
        cy.interceptWordFail(word.queso)
        cy.typeWord(word.queso)
        cy.sendForm()
        cy.typeWord(word.queso)
        cy.sendForm()
        cy.typeWord(word.queso)
        cy.sendForm()
        cy.typeWord(word.queso)
        cy.sendForm()
        cy.typeWord(word.queso)
        cy.sendForm()
        cy.checkAttempRows()
    });

    it('Check lost game', () => {
        
    });
});