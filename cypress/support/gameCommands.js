/// <reference types="cypress" />
import messages from '../fixtures/gameMenssages.json'


let id


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
Cypress.Commands.add('interceptWord', (word) => {
    cy.intercept('GET', (api.newGame + '/' + id + api.wordValidation + word)).as('interceptWord')
})
Cypress.Commands.add('interceptWordAndWin', (word) => {
    return cy.intercept('GET', (api.newGame + '/20' + api.wordValidation + word),
    {
        fixture: 'wordValidation.json'
    }
    )
})

Cypress.Commands.add('getWinGameAlert', () => {
    return cy.get('app-win-round-dialog')
})
Cypress.Commands.add('checkWinGameAlert', () => {
    cy.getWinGameAlert().should('be.visible')
})
Cypress.Commands.add('clickInMainPage', () => {
    cy.get('.cdk-global-overlay-wrapper')
})

