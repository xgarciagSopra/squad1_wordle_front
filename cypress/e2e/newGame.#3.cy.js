/// <reference types="cypress" />



describe('#3 New game', () => {
    beforeEach(() => {
      cy.goToLandingPage()
    });
  
    it('Game start correctly', () => {
        cy.newGameSuccessful()
        cy.checkNewGameStartCorrect()
    });
    it('Game start error', () => {
        cy.newGameFaild()
        cy.checkNewGameErrorAlertIsVisible()
    });
  
  });