
import keys from '../fixtures/keyboard.json'
import api from '../fixtures/api.json'


Cypress.Commands.add('getHeader',() => {
    return cy.get('app-header .header')
})
Cypress.Commands.add('checkHeaderText',(text) => {
    cy.getHeader().should('have.text',text).should('be.visible')
})

Cypress.Commands.add('getLeter', (leter) => {
    return cy.get('app-keyboard > .keyboard button').contains(leter)
})

Cypress.Commands.add('checkLeter',(leter) => {
    cy.getLeter(leter).should('have.text',leter).should('be.visible')
})

Cypress.Commands.add('checkKeyboard',(keyboard) => {
    let leters =  keyboard.split('')

    leters.forEach(leter =>{
        cy.checkLeter(leter)
    })
})

Cypress.Commands.add('clickLeter',(leter) => {
    cy.getLeter(leter).click()
})

Cypress.Commands.add('checkSendButtonState',(state) => {
    cy.get(':nth-child(3) > :nth-child(9)').should(state)
})

Cypress.Commands.add('sendForm',() => {
    cy.getLeter(keys.send).click()
})

Cypress.Commands.add('typeWord',(word) => {
    let leters = word.split('')

    leters.forEach(leter => {
        cy.clickLeter(leter)
    });
})

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
Cypress.Commands.add('checkResultBoxBorderColor',(color) => {
    cy.getResultBox().should('have.css','border-color',color)
})

Cypress.Commands.add('interceptWord',(word) => {
    return cy.intercept('GET',(api.wordValidation + word))
})
