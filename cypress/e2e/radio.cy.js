describe('Radio Buttons', () => {

    beforeEach(() => {
        cy.goHome()
        cy.login()
        cy.userLoggedIn() // Checkpoint (Valida que o login foi bem-sucedido)
        cy.goTo('/radio', 'Radio Buttons')
    })

    it('Deve mrarcar o framework usado no curos de Cypress Skills', () => {
        cy.contains('label', 'Cypress')
            .click()
        cy.get('#cypress')
            .should('be.checked')
    });
});