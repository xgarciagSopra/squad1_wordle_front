/// <reference types="cypress" />

describe('#3 New game', () => {
    it('Game start correctly', () => {
        cy.forceNewGameSuccessful()
        cy.goToLandingPage()
        cy.wait('@forceGameSuccessful')
        cy.checkNewGameStartCorrect()
    });
    it('Game start error', () => {
        cy.forceNewGameFaild()
        cy.goToLandingPage()
        cy.wait('@forceGameFail')
        cy.checkNewGameErrorAlertIsVisible()
    });
  
  });