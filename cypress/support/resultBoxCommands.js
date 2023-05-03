import keys from '../fixtures/keyboard.json'
import word from '../fixtures/words.json'

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

Cypress.Commands.add('getOneResultBox',(box) => {
    return cy.get(':nth-child(' + box + ') > .result-box')
})
Cypress.Commands.add('checkResultBoxLetter',(box,letter) => {
    cy.getOneResultBox(box).should('have.text',letter)
})
Cypress.Commands.add('clickResultBox',(box) => {
    cy.getOneResultBox(box).click()
})
Cypress.Commands.add('checkResultBoxColor',(color) => {
    cy.getResultBox().should('not.have.css','background-color',color)
})
Cypress.Commands.add('checkRecultBoxesStatusChange', () => {
    cy.checkResultBoxColor(keys.uncheckletter)
})