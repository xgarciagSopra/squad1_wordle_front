/// <reference types="cypress" />
import urls from '../fixtures/urls.json'


describe('#3 New game', () => {
    beforeEach(() => {
      cy.visitUrl(urls.localhost)
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