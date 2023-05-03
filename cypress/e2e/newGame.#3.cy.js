/// <reference types="cypress" />




describe('#3 New game', () => {
    it('Game start correctly', () => {
        cy.newGameSuccessful()
        cy.goToLandingPage()
        cy.wait('@gameSuccessful')
        cy.checkNewGameStartCorrect()
    });
    it('Game start error', () => {
        cy.newGameFaild()
        cy.goToLandingPage()
        cy.wait('@forceGameFail')
        cy.checkNewGameErrorAlertIsVisible()
    });
  
  });