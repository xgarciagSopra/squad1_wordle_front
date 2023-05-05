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
