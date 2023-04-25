Cypress.Commands.add('visitUrl', (label) => {
    cy.visit(label)
    cy.viewport(1920, 1080)
})
