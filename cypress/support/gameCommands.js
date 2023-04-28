/// <reference types="cypress" />
import api from '../fixtures/api.json'
import messages from '../fixtures/gameMenssages.json'
import game from '../fixtures/newGameSuccessful.json'

let id

Cypress.Commands.add('newGameFaild', () => {
    cy.intercept('POST', api.newGame,
        {
            statusCode: 404,
        }
    ).as('gameFail')

})
Cypress.Commands.add('newGameSuccessful', () => {
    cy.intercept('POST', api.newGame).as('gameSuccessful')
})
Cypress.Commands.add('gameSuccessful', () => {
    cy.intercept('POST', api.newGame,
        {
            statusCode: 200,
            body: {
                "id": 20
            }
        }
    ).as('gameSuccessful')
})
Cypress.Commands.add('waitGame', () => {
    cy.wait('@gameSuccessful').then((data) => {
        id = data.response.body.id
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
Cypress.Commands.add('interceptWord', (word) => {
    cy.intercept('GET', (api.newGame + '/' + id + api.wordValidation + word)).as('interceptWord')
})

Cypress.Commands.add('checkRecultBoxesStatusChange', () => {
    
})