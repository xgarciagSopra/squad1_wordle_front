import keys from '../fixtures/keyboard.json'


Cypress.Commands.add('getHeader',() => {
    return cy.get('app-header .header')
})
Cypress.Commands.add('checkHeaderText',(text) => {
    cy.getHeader().should('have.text',text).should('be.visible')
})

Cypress.Commands.add('getLetter', (letter) => {
    return cy.get('app-keyboard > .keyboard button').contains(letter)
})

Cypress.Commands.add('checkLetter',(letter) => {
    cy.getLetter(letter).should('have.text',letter).should('be.visible')
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

Cypress.Commands.add('sendForm',() => {
    cy.getLetter(keys.enviar).click()
})

Cypress.Commands.add('typeWord',(word) => {
    let letters = word.split('')

    letters.forEach(letter => {
        cy.clickLetter(letter)
    });
})



Cypress.Commands.add('deleteLetter', () => {
    cy.getLetter(keys.borrar).click()
})

Cypress.Commands.add('deleteWord', (word) => {
    let letters = word.split('')

    letters.forEach(letter => {
        cy.deleteLetter()
    });
})