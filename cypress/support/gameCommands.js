/// <reference types="cypress" />
import api from '../fixtures/api.json'
import messages from '../fixtures/gameMenssages.json'

Cypress.Commands.add('newGameFaild', () => {
    cy.intercept('POST',api.newGame,
    {
        "wordExists":false
    }
    ).as('gameFail')
    cy.wait('@gameFail')
})
Cypress.Commands.add('newGameSuccessful', () => {
    cy.intercept('POST',api.newGame,
    {
        "wordExists":true
    }
    ).as('gameSuccessful')
    cy.wait('@gameSuccessful')
})

Cypress.Commands.add('checkNewGameErrorAlertIsVisible', () => {
    return cy.get('app-error-round-dialog .mat-mdc-dialog-content')
                    .should('be.visible')
                    .should('have.text',messages.newGameError)
})
Cypress.Commands.add('clickAcceptAlertButton', () => {
    cy.get('app-error-round-dialog .btn-success').click()
})
Cypress.Commands.add('acceptNewGameErrorAlert', () => {
    cy.checkNewGameErrorAlertIsVisible().then(() => {
        cy.clickAcceptAlertButton()
    })
})

Cypress.Commands.add('getAlertError', () => {
    return cy.get('app-error-round-dialog .mat-mdc-dialog-content')
})
Cypress.Commands.add('checkNewGameStartCorrect', () => {
    cy.getAlertError().should('not.be.visible')
})