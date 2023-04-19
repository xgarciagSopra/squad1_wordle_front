import keys from '../fixtures/keyboard.json'

Cypress.Commands.add('getLeter', (leter) => {
    return cy.get('app-keyboard > .keyboard p').contains(leter)
})

Cypress.Commands.add('checkLeter',(leter) => {
    cy.getLeter(leter).should('have.text',leter).should('be.visible')
})

Cypress.Commands.add('clickLeter',(leter) => {
    cy.getLeter(leter).click()
})

Cypress.Commands.add('sendForm',() => {
    cy.getLeter(keys.enviar).click()
})

Cypress.Commands.add('typeWord',(word) => {
    cy.clickLeter(word.charAt(0))
    cy.clickLeter(word.charAt(1))
    cy.clickLeter(word.charAt(2))
    cy.clickLeter(word.charAt(3))
    cy.clickLeter(word.charAt(4))
})

Cypress.Commands.add('getResultBoxText',() => {
    return cy.get('#box')
})

Cypress.Commands.add('checkResultBoxText',(word) => {
    cy.getResultBoxText().should('have.text',word).should('be.visible')
})