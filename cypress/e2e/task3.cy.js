/// <reference types="cypress" />




describe('#3 New game', () => {
    it('Game start correctly', () => {
        cy.newGameSuccessful()
        cy.visitUrl()
        cy.wait('@gameSuccessful')
        cy.checkNewGameStartCorrect()
    });
    it('Game start error', () => {
        cy.newGameFaild()
        cy.visitUrl()
        cy.wait('@gameFail')
        cy.checkNewGameErrorAlertIsVisible()
    });
  
  });