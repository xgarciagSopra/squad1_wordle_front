/// <reference types="cypress" />
import keys from '../fixtures/keyboard.json'
describe('#2 Verify word exist', () => {

  beforeEach(() => {
    cy.visitUrl('http://localhost:4200/')
  })

  it('Check keyboard', () => {
    cy.checkLeter(keys.queso.charAt(0))
    cy.sendForm()
  });

  it('Check type in word input', () => {
    cy.typeWord(keys.queso)
    cy.checkResultBoxText(keys.queso)
  });

  it('Check validation word', () => {
    cy.typeWord(keys.queso)
    cy.checkResultBoxText(keys.queso)
    cy.sendForm()
  });
})