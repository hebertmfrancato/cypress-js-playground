describe('Iframe', () => {
    beforeEach(() => {
        cy.goHome()
        cy.doLogin()
        cy.goTo('/iframe', 'IFrame')
    })

    it('Deve preencher o nome em uma página que tem Iframe', () => {

        cy.get('[data-cy="iframe-inputs"]', { timeout: 10000 })
            .should('be.visible')
            .then(($iframe) => {
                const $body = $iframe.contents().find('body')
            
                cy.wrap($body)
                    .find('[data-cy="fullname"]', { timeout: 10000 })
                    .type('Hebert Francato')
            })
    })
});