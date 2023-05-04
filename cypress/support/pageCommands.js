import urls from '../fixtures/urls.json'

Cypress.Commands.add('goToLandingPage', () => {
    cy.visit(urls.localhost)
})
