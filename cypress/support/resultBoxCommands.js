

Cypress.Commands.add('getResultBoxText',() => {
    return cy.get('#box')
})
Cypress.Commands.add('getResultBox',() => {
    return cy.get('.result-box')
})
Cypress.Commands.add('checkResultBoxIsVisible',() => {
    cy.getResultBox().should('be.visible')
})

Cypress.Commands.add('checkResultBoxText',(word) => {
    cy.getResultBoxText().should('have.text',word).should('be.visible')
})
Cypress.Commands.add('checkResultBoxBorderClass',(clas) => {
    cy.getResultBox().should('have.class',clas)
})

Cypress.Commands.add('checkFiveResultBoxes',() => {
    cy.getResultBox().should('have.length',5)
})