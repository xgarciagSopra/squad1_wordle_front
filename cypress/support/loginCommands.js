/// <reference types="cypress" />
import users from '../fixtures/users.json'


Cypress.Commands.add('getUserInput',() => {
    return cy.get('#usuario')
})

Cypress.Commands.add('getPasswordInput',() => {
    return cy.get('#contrasena')
})

Cypress.Commands.add('getFormButton',() => {
    return cy.get('.btn')
})

Cypress.Commands.add('checkUserInputIsVisible',() => {
    cy.getUserInput().should('be.visible')
})

Cypress.Commands.add('checkPasswordInputIsVisible',() => {
    cy.getPasswordInput().should('be.visible')
})

Cypress.Commands.add('checkFormButtonIsVisible',() => {
    cy.getFormButton().should('be.visible')
})

Cypress.Commands.add('checkFormButtonIsDisabled',() => {
    cy.getFormButton().should('be.disabled')
})

Cypress.Commands.add('clickFormButton', () => {
    cy.getFormButton().click()
})

Cypress.Commands.add('checkFormButtonIsEnabled',() => {
    cy.getFormButton().should('be.enabled')
})

Cypress.Commands.add('typeDataInUserInput', (username) => {
    cy.getUserInput().clear().type(username)
})

Cypress.Commands.add('typeDataInPasswordInput', (password) => {
    cy.getPasswordInput().clear().type(password)
})

Cypress.Commands.add('typeCorrectUserData',() => {
    cy.typeDataInUserInput(users.user[0].username)
    cy.typeDataInPasswordInput(users.user[0].password)
})

Cypress.Commands.add('typeInvalidUserData',() => {
    cy.typeDataInUserInput(users.user[1].username)
    cy.typeDataInPasswordInput(users.user[1].password)
})

