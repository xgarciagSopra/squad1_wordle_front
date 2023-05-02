import keys from '../fixtures/keyboard.json'


Cypress.Commands.add('getResultBoxText',() => {
    return cy.get('app-result-box')
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
Cypress.Commands.add('checkResultBoxClass',(clas) => {
    cy.getResultBox().should('have.class',clas)
})

Cypress.Commands.add('checkFiveResultBoxes',() => {
    cy.getResultBox().should('have.length',5)
})

Cypress.Commands.add('clickResultBox',(box) => {
    cy.get(':nth-child(' + box + ') > .result-box').click()
})
Cypress.Commands.add('checkResultBoxColor',(color) => {
    cy.getResultBox().should('not.have.css','background-color',color)
})
Cypress.Commands.add('checkRecultBoxesStatusChange', () => {
    cy.checkResultBoxColor(keys.uncheckletter)
})