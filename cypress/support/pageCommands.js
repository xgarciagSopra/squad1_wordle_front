import urls from '../fixtures/urls.json'

Cypress.Commands.add('goToLandingPage', () => {
    cy.visit(urls.localhost)
})

Cypress.Commands.add('checkInvalidWordAlert',() => {
    cy.get('.ng-trigger').should('be.visible')
})

Cypress.Commands.add('checkCurrentPageIsLoginPage',() => {
    cy.url().should('eq',urls.localhost + urls.loginPage)
})

Cypress.Commands.add('goToLoginPage',() => {
    cy.visit(urls.localhost + urls.loginPage)
})