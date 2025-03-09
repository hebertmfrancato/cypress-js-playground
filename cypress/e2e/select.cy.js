describe('Select', () => {
    
    beforeEach(() => {
        cy.goHome()
        cy.login()
        cy.userLoggedIn() // Checkpoint (Valida que o login foi bem-sucedido)
        cy.goTo('/select', 'Select')
    })

    it('Deve selecionar o Cypress', () => {
        cy.contains('label', 'Selecione um Framework de Testes')
            .parent()
            .find('select')
            .select('Cypress')
    });

    it('Deve escolher as linguagens que usam Node.js', () => {
        const langs = ['JavaScript', 'TypeScript', 'Python']

        cy.get('input[placeholder^="Linguagens de programação"]')
            .click()

        langs.forEach(lang => {
            cy.contains('.option-item', new RegExp("^" + lang + "$"))
                .click()
        })

        cy.get('.language-item')
            .should('have.length', langs.length)
    });
});