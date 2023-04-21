import api from '../fixtures/api.json'

Cypress.Commands.add('newGameFaild', () => {
    cy.intercept('GET',api.newGame,'false').as('gameFail')
    cy.wait('@gameFail')
})
