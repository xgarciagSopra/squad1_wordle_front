/// <reference types="cypress" />
import keys from '../fixtures/keyboard.json'
import urls from '../fixtures/urls.json'


describe('#2 Verify word exist', () => {

  beforeEach(() => {
    cy.visitUrl(urls.localhost)
    cy.acceptNewGameErrorAlert()
  })

  it('Check web structure', () => {
    cy.checkHeaderText(keys.header)
    cy.checkKeyboard(keys.teclado)
    cy.checkResultBoxIsVisible()
  });

  it('Check keyboard', () => {
    cy.checkKeyboard(keys.teclado)
    cy.checkSendButtonState(keys.disabled)
    cy.sendForm()
  });

  it('Check type in word input', () => {
    cy.typeWord(keys.queso)
    cy.checkResultBoxText(keys.queso)
  });

  it('Check a valid word length', () => {
    cy.typeWord(keys.queso)
    cy.checkResultBoxText(keys.queso)
    cy.checkSendButtonState(keys.enabled)
    cy.sendForm()
  });

  it('Check a invalid word length', () => {
    cy.typeWord(keys.hola)
    cy.checkResultBoxText(keys.hola)
    cy.checkSendButtonState(keys.disabled)
    cy.sendForm()
  });

  it('Check a invalid word length', () => {
    cy.typeWord(keys.quesos)
    cy.checkResultBoxText(keys.quesos)
    cy.checkSendButtonState(keys.disabled)
    cy.sendForm()
  });

  it('Check correct validation word ', () => {
    cy.interceptWord(keys.queso)
    cy.typeWord(keys.queso)
    cy.checkResultBoxText(keys.queso)
    
    cy.checkSendButtonState(keys.enabled)
    cy.checkResultBoxBorderColor(keys.valid)
    cy.sendForm()
  });
  
  it('Check invalid word ', () => {
    cy.typeWord(keys.qwert)
    cy.checkResultBoxText(keys.qwert)
    cy.checkSendButtonState(keys.enabled)
    cy.checkResultBoxBorderColor(keys.invalid)
    cy.sendForm()
  });
})