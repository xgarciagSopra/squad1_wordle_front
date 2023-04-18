Cypress.Commands.add('visitUrl', (label) => {
    cy.visit(label)
})

Cypress.Commands.add('checkTitleText',(text) => {
    return cy.get('p').should(($text) => {
        expect($text).to.have.text(text)
    })
})