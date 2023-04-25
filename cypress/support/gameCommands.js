import api from '../fixtures/api.json'

Cypress.Commands.add('newGameFaild', () => {
    cy.intercept('POST',api.newGame,'false').as('gameFail')
    cy.wait('@gameFail')
})
