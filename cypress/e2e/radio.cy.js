describe('Radio Buttons', () => {

    beforeEach(() => {
        cy.goHome()
        cy.doLogin()
        cy.goTo('/radio', 'Radio Buttons')
    })

    it('Deve mrarcar o framework usado no curos de Cypress Skills', () => {
        cy.contains('label', 'Cypress')
            .click()
        cy.get('#cypress')
            .should('be.checked')
    })
})