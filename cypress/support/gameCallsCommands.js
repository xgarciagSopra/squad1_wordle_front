/// <reference types="cypress" />
import api from '../fixtures/api.json'


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

Cypress.Commands.add('waitUntilGameLoaded', () => {
    cy.wait('@forceGameSuccessful')
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

