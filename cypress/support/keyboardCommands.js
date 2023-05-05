import keys from '../fixtures/keyboard.json'
import api from '../fixtures/api.json'


Cypress.Commands.add('getHeader',() => {
    return cy.get('app-header .header')
})

Cypress.Commands.add('checkHeaderText',(text) => {
    cy.getHeader().should('have.text',text).should('be.visible')
})

Cypress.Commands.add('getHeader',() => {
    return cy.get('app-header .header')
})

Cypress.Commands.add('checkHeaderText',(text) => {
    cy.getHeader().should('have.text',text).should('be.visible')
})

Cypress.Commands.add('getLettter', (lettter) => {
    return cy.get('app-keyboard > .keyboard button').contains(lettter)
})

Cypress.Commands.add('checkLeter',(leter) => {
    cy.getLeter(leter).should('have.text',leter).should('be.visible')
})

Cypress.Commands.add('checkKeyboard',(keyboard) => {
    let letters =  keyboard.split('')

    letters.forEach(letter =>{
        cy.checkLetter(letter)
    })
})

Cypress.Commands.add('clickLetter',(letter) => {
    cy.getLetter(letter).click()
})

Cypress.Commands.add('checkSendButtonState',(state) => {
    cy.get(':nth-child(3) > :nth-child(9)').should(state)
})

Cypress.Commands.add('checkSendButtonsEnabled',() => {
    cy.checkSendButtonState("be.enabled")
})

Cypress.Commands.add('checkSendButtonIsDisabled',() => {
    cy.checkSendButtonState("be.disabled")
})

Cypress.Commands.add('sendForm',() => {
    cy.getLetter(keys.send).click()
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

Cypress.Commands.add('checkKeyBoardStatus',(word) => {
    let letters = word.split('')

    letters.forEach(letter => {
        cy.getLetter(letter).should('not.have.css','background-color',keys.uncheckletter)
    });
})

Cypress.Commands.add('checkResultBoxBorderColor',(color) => {
    cy.getResultBox().should('have.css','border-color',color)
})

Cypress.Commands.add('interceptWord',(word) => {
    return cy.intercept('GET',(api.wordValidation + word))
})

Cypress.Commands.add('checkKeyboardRowDisabled', (letters) => {
    let col = 1
    letters.forEach(letter => {
        cy.get('.keyboard > .container > :nth-child(1) > :nth-child(' + col + ')').should('have.text',letter).should('be.disabled')
        if(col <= letters.length){
            col++
        }
    });
})

Cypress.Commands.add('checkKeyboardDisabled', () => {
    let row1 = keys['row-1'].split('')
    let row2 = keys['row-1'].split('')
    let row3 = keys['row-1'].split('')

    cy.checkKeyboardRowDisabled(row1)
    cy.checkKeyboardRowDisabled(row2)
    cy.checkKeyboardRowDisabled(row3)
    
})
