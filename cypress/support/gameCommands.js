/// <reference types="cypress" />
import api from '../fixtures/api.json'
import messages from '../fixtures/gameMenssages.json'



Cypress.Commands.add('forceNewGameFaild', () => {
    cy.intercept('POST', api.newGame,
        {
            statusCode: 404,
        }
    ).as('forceGameFail')

})
Cypress.Commands.add('forceNewGameSuccessful', () => {
    cy.intercept('POST', api.newGame).as('forceGameSuccessful')
})

Cypress.Commands.add('getGameLoaded', () => {
    cy.wait('@forceGameSuccessful').then((data) => {
        return data.response.body.id
    })
})
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
Cypress.Commands.add('interceptWord', (word, id) => {
    cy.intercept('GET', (api.newGame + '/' + id + api.wordValidation + word)).as('interceptWord')
})

