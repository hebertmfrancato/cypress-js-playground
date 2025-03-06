describe('Checkbox', () => {
    beforeEach(() => {
        cy.goHome()
        cy.login('papito@cyskills.com.br', 'showtime')
        cy.userLoggedIn() // Checkpoint (Valida que o login foi bem-sucedido)
        cy.goTo('/checkbox', 'Checkbox')
    })

    it('Deve marcar as linguagens que usam Node.js', () => {
        cy.get('label[for="javascript"]')
            .click()
        cy.get('label[for="typescript"]')
            .click()
    })

    it('Deve marcar todas as opções', () => {
        const langs = ['javascript', 'typescript', 'python', 'go', 'rust']
        langs.forEach(lang => {
            cy.get(`label[for="${lang}"]`)
                .click()
        })
    })
})