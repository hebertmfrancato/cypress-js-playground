describe('Input Fields', () => {
    beforeEach(() => {
        cy.goHome()
    })

    it('Deve preencher o campo texto', () => {
        cy.login()
        cy.userLoggedIn() // Checkpoint (Valida que o login foi bem-sucedido)
        cy.get('a[href="/input-fields"]')
            .click()
        cy.contains('h2', 'Input Fields')
            .should('be.visible') // Checkpoint (Valida que a página de "Input Fields" foi carregada corretamente)
        cy.get('input[placeholder="John Doe"]')
            .type(' Fernando Papito')
        cy.get('input[name="email"]')
            .type('fernando@papito.dev')
        cy.get('input[name="number"]')
            .type('2024')
        cy.get('input[name="date"]')
            .type('2024-12-01')
    });
});