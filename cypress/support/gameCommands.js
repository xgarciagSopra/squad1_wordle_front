/// <reference types="cypress" />
import messages from '../fixtures/gameMenssages.json'


Cypress.Commands.add('checkNewGameErrorAlertIsVisible', () => {
    return cy.get('app-error-round-dialog .mat-mdc-dialog-content')
        .should('be.visible')
        .should('have.text', messages.newGameError)
})

Cypress.Commands.add('clickAcceptAlertButton', () => {
    cy.get('app-error-round-dialog .btn-success').click()
})

Cypress.Commands.add('acceptNewGameErrorAlert', () => {
    cy.checkNewGameErrorAlertIsVisible().then(() => {
        cy.clickAcceptAlertButton()
    })
})

Cypress.Commands.add('checkNewGameStartCorrect', () => {
    cy.clickLetter('P')
    cy.checkResultBoxText('P')
})

Cypress.Commands.add('checkWinGameAlert', () => {
    cy.get('app-win-round-dialog').should('be.visible')
})

Cypress.Commands.add('checkLostGameAlert', () => {
    cy.get('app-game-over-dialog').should('be.visible')
})


