/// <reference types="cypress" />



describe('# Login (User validation)', () => {
    beforeEach(() => {
        cy.goToLandingPage()
    });
    
    it('if user not have token redirect user to login page', () => {
        cy.checkCurrentPageIsLoginPage()
    });
    
    it('check login forms inputs is visible', () => {
        cy.checkCurrentPageIsLoginPage()
        cy.checkUserInputIsVisible(),
        cy.checkPasswordInputIsVisible()
        cy.checkFormButtonIsVisible()
        cy.checkFormButtonIsDisabled()
    });

    it('check form button enabled if inputs has data', () => {
        cy.checkCurrentPageIsLoginPage()
        cy.typeCorrectUserData()
        cy.checkFormButtonIsEnabled()
    });

    it('check alet if data user is invalid', () => {
        cy.typeInvalidUserData()
    });

    it('correct invalid data and check ', () => {
        cy.typeInvalidUserData()
        cy.typeCorrectUserData()
        
    });

    it('check form click if is disabled', () => {
        cy.checkFormButtonIsDisabled()
        cy.clickFormButton()
    });

    it('check form click if is enabled', () => {
        cy.typeCorrectUserData()
        cy.checkFormButtonIsEnabled()
        cy.clickFormButton()
    });

    it('check push ', () => {
        
    });

    it('check alect on error 401', () => {
        
    });
});