/// <reference types="cypress" />
import api from '../fixtures/api.json'
import messages from '../fixtures/gameMenssages.json'

Cypress.Commands.add('forceNewGameFaild', () => {
    return cy.intercept('POST',api.newGame,
    {
        "wordExists":false
    }
    )
    
})
Cypress.Commands.add('forceNewGameSuccessful', () => {
    return cy.intercept('POST',api.newGame,
    {
        "wordExists":true
    }
    )
    
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