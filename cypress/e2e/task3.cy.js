/// <reference types="cypress" />
import urls from '../fixtures/urls.json'


describe('#3 New game', () => {
    it('Game start correctly', () => {
        cy.newGameSuccessful()
        cy.visitUrl(urls.localhost)
        cy.wait('@gameSuccessful')
        cy.checkNewGameStartCorrect()
    });
    it('Game start error', () => {
        cy.newGameFaild()
        cy.visitUrl(urls.localhost)
        cy.wait('@gameFail')
        cy.checkNewGameErrorAlertIsVisible()
    });
  
  });