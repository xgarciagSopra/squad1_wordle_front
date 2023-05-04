/// <reference types="cypress" />



describe('#3 New game', () => {
    beforeEach(() => {
      cy.goToLandingPage()
    });
  
    it('Game start correctly', () => {
        cy.forceNewGameSuccessful()
        cy.checkNewGameStartCorrect()
    });
    it('Game start error', () => {
        cy.forceNewGameFaild()
        cy.checkNewGameErrorAlertIsVisible()
    });
  
  });