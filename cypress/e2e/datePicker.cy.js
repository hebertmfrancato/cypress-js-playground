describe('Date Picker', () => {
    
    beforeEach(() => {
        cy.goHome()
        cy.doLogin()
        cy.goTo('/date-picker', 'Date Picker')
    })

    it('Selecionar uma data de aniversário', () => {
        cy.get('input[placeholder="Escolha uma data"][readonly]') // readonly="readonly"
            .click()

        cy.get('select[aria-label="Month"]')
            .select('Fevereiro')

        cy.get('input[aria-label="Year"]')
            .type('1992')

        cy.get('span[aria-label="Fevereiro 18, 1992"]')
            .click()
    })
});