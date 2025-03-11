describe('CEP', () => {
    
    beforeEach(() => {
        cy.goHome()
        cy.doLogin()
        cy.goTo('/cep', 'CEP (API dos Correios)')
    })

    it('Deve cadastrar um endereço consuminfo a API dos Correios', () => {

        const address = {
            cep: '04534011',
            logradouro: 'Rua Joaquim Floriano',
            localidade: 'São Paulo',
            uf: 'SP'
        }

        cy.intercept('GET', `https://viacep.com.br/ws/${address.cep}/json/`, {
            statusCode: 200,
            body: address
        }).as('getCep')

        cy.get('input[id="cep"]')
            .type(address.cep)
        cy.contains('button', 'Cadastrar')
            .click()
        cy.wait('@getCep')
        cy.get('input[id="logradouro"]', { timeout: 7000 })
            .should('have.value', address.logradouro)
        cy.get('input[id="cidade"]')
            .should('have.value', address.localidade)
        cy.get('input[id="estado"]')
            .should('have.value', address.uf)
    })
});