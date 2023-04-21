import api from '../fixtures/api.json'

Cypress.Commands.add('newGameFaild', () => {
    cy.intercept('GET',api.newGame,null)
})
