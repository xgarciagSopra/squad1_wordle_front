/// <reference types="cypress" />
import word from '../fixtures/words.json'


describe('#5 End Game', () => {
    beforeEach(() => {
        cy.forceNewGameSuccessful().as('forceGameSuccessful')
        cy.goToLandingPage()
        cy.wait('@forceGameSuccessful')
    });

    it('Show win game alert', () => {
        cy.interceptWordAndWin(word.queso).as('interceptWordAndWin')
        cy.typeWord(word.queso)
        cy.checkResultBoxText(word.queso)
        cy.sendForm()
        cy.wait('@interceptWordAndWin')
        cy.checkKeyboardDisabled()
    });
    it('Block all page actions', () => {
        cy.interceptWordAndWin(word.queso).as('interceptWordAndWin')
        cy.typeWord(word.queso)
        cy.checkResultBoxText(word.queso)
        cy.sendForm()
        cy.wait('@interceptWordAndWin')
       cy.checkKeyboardDisabled()
        
        });
});