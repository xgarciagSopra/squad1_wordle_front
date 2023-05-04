import urls from '../fixtures/urls.json'

Cypress.Commands.add('goToLandingPage', () => {
    cy.visit(urls.localhost)
})

Cypress.Commands.add('checkInvalidWordAlert',() => {
    cy.get('.ng-trigger').should('be.visible')
})