/// <reference types="cypress" />
describe('Test Inicial', () => {
  beforeEach(() => {

  })
  it('Check Title has correct text', () => {
    cy.visitUrl('http://localhost:4200/')
    cy.checkTitleText("Hola bienvenidos")
  })
 
})