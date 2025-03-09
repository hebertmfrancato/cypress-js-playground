describe('Tags', () => {

    beforeEach(() => {
        cy.goHome()
        cy.login()
        cy.userLoggedIn() // Checkpoint (Valida que o login foi bem-sucedido)
        cy.goTo('/tags', 'Tags')
    })

    it('Deve adicionar tags', () => {

        const tags = ['Cypress', 'Playwright', 'JavaScript', 'Node.js']

        tags.forEach(tag => {
            cy.get('.new-tag')
                .type(`${tag}{Enter}`)
                .should('have.value', '')
            cy.wait(500) // Think time
        })

        tags.forEach(tag => {
            cy.get('.tag-input')
                .should('contain', tag)
        })
    })
})