describe('Textarea', () => {
    beforeEach(() => {
        cy.goHome()
    })

    it('Deve preencher o campo deárea de texto', () => {
        cy.login('papito@cyskills.com.br', 'showtime')
        cy.userLoggedIn() // Checkpoint (Valida que o login foi bem-sucedido)
        cy.goTo('/textarea', 'Textarea')
        cy.get('textarea[name="message"]')
            .type('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')
            .should('be.visible')
    })
})