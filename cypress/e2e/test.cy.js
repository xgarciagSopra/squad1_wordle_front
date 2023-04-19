/// <reference types="cypress" />
describe('Test Inicial', () => {
  beforeEach(() => {
    cy.visitUrl('http://localhost:4200/')
  })
  it('Check Title has correct text', () => {
    cy.checkTitleText("Hola bienvenidos")
  })
  it('Check keyboard', () => {
    cy.checkLeter('Q')
    cy.checkLeter('ENVIAR')
  });
  it('Check type in word input', () => {
    cy.getLeter('Q').click()
    cy.getLeter('U').click()
    cy.getLeter('E').click()
    cy.getLeter('S').click()
    cy.getLeter('O').click()
    cy.checkResultBoxText('QUESO')
  });
  it('Check validation word', () => {
    cy.getLeter('Q').click()
    cy.getLeter('U').click()
    cy.getLeter('E').click()
    cy.getLeter('S').click()
    cy.getLeter('O').click()
    cy.checkResultBoxText('QUESO')
    cy.getLeter('ENVIAR').click()
  });
 
})