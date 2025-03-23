describe('Tables', () => {
    beforeEach(() => {
        cy.goHome()
        cy.doLogin()
        cy.goTo('/tables', 'Tables')
    })

    it('Validar a linha do Github', () => {
        cy.contains('table tbody tr', '1004')
            .should('be.visible')
            .and('contain', 'papitodev')
            .and('contain', 'Ativo')
    })

    it('Remover uma rede social', () => {
        const name = 'Facebook'

        cy.contains('table tbody tr', 1002)
            .find('.remove-item')
            .click()
        cy.contains('button', 'Excluir')
            .click()
        cy.get('table tbody')
            .should('not.contain', name)
    })

    it('Permanecer na tabela ao desistir da exclusão de uma rede social', () => {
        const name = 'Youtube'

        cy.contains('table tbody tr', 1005)
            .find('.remove-item')
            .click()
        cy.contains('button', 'Cancelar')
            .click()
        cy.get('table tbody')
            .should('contain', name)
    })

    it('Deve validar o link que abre o Instagram em outra aba', () => {
        const id = 'instapapito'

        cy.contains('table tbody tr', id)
            .contains('a', 'Visitar')
            .should('have.attr', 'href', 'https://instagram.com/instapapito')
            .and('have.attr', 'target', '_blank')
    })
});