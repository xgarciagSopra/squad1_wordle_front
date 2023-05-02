import urls from '../fixtures/urls.json'

Cypress.Commands.add('visitUrl', () => {
    cy.visit(urls.localhost)
})
