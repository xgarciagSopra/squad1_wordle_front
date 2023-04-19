Cypress.Commands.add('getLeter', (leter) => {
    return cy.get('app-keyboard > .keyboard p').contains(leter)
})

Cypress.Commands.add('checkLeter',(leter) => {
    return cy.getLeter(leter).should(($text) => {
        expect($text).to.have.text(leter)
    })
})

Cypress.Commands.add('getResultBoxText',() => {
    return cy.get('#box')
})
Cypress.Commands.add('checkResultBoxText',(word) => {
    return cy.getResultBoxText().should(($word) => {
        expect($word).to.have.text(word)
    })
})