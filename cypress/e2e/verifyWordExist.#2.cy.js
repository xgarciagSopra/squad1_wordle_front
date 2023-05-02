/// <reference types="cypress" />
import keys from '../fixtures/keyboard.json'
import word from '../fixtures/words.json'
import header from '../fixtures/gameHeader.json'



describe('#2 Verify word exist', () => {

  beforeEach(() => {
    cy.goToLandingPage()
    cy.acceptNewGameErrorAlert()
  })

  it('Check web structure', () => {
    cy.checkHeaderText(header.header)
    cy.checkKeyboard(keys.keyboard)
    cy.checkResultBoxIsVisible()
  });

  it('Check keyboard', () => {
    cy.checkKeyboard(keys.keyboard)
    cy.checkSendButtonIsDisabled()
  });

  it('Check type in word input', () => {
    cy.typeWord(word.queso)
    cy.checkResultBoxText(word.queso)
  });

  it('Check a valid word length', () => {
    cy.typeWord(word.queso)
    cy.checkResultBoxText(word.queso)
    cy.checkSendButtonsEnabled()
    cy.sendForm()
  });

  it('Check a invalid word length', () => {
    cy.typeWord(word.hello)
    cy.checkResultBoxText(word.hello)
    cy.checkSendButtonIsDisabled()
    cy.sendForm()
  });

  it('Check a invalid word length', () => {
    cy.typeWord(word.quesos)
    cy.checkResultBoxText(word.quesos)
    cy.checkSendButtonIsDisabled()
    cy.sendForm()
  });

  it('Check correct validation word ', () => {
    cy.interceptWord(word.queso)
    cy.typeWord(word.queso)
    cy.checkResultBoxText(word.queso)
    
    cy.checkSendButtonsEnabled()
    cy.checkResultBoxBorderColor(keys.valid)
    cy.sendForm()
  });
  
  it('Check invalid word ', () => {
    cy.typeWord(word.qwert)
    cy.checkResultBoxText(word.qwert)
    cy.checkSendButtonsEnabled()
    cy.checkResultBoxBorderColor(keys.invalid)
    cy.sendForm()
  });
})