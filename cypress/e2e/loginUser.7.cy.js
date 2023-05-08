/// <reference types="cypress" />

describe('# Login (User validation)', () => {
    
    it('if user not have token redirect user to login page', () => {
        cy.goToLoginPage()
    });
});