/// <reference types="cypress" />
import keys from '../fixtures/keyboard.json'
import header from '../fixtures/gameHeader.json'
import word from '../fixtures/words.json'


describe('#2 Verify word exist', () => {
  
  beforeEach(() => {
    cy.forceNewGameSuccessful().as('forceGameSuccessful')
    cy.goToLandingPage()
    cy.waitUntilGameLoaded()
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
  });

  it('Check a invalid word length', () => {
    cy.typeWord(word.hello)
    cy.checkResultBoxText(word.hello)
    cy.checkSendButtonIsDisabled()
  });

  it('Check correct validation word ', () => {
    cy.interceptWord(word.queso,idGame)
    cy.typeWord(word.queso)
    cy.checkResultBoxText(word.queso)
    cy.checkSendButtonsEnabled()
    cy.sendForm()
    cy.wait('@interceptWord')
    
  });
  
  it('Check invalid word ', () => {
    cy.typeWord(word.qwert)
    cy.checkResultBoxText(word.qwert)
    cy.checkSendButtonsEnabled()
    cy.sendForm()
    cy.checkInvalidWordAlert()
  });
})