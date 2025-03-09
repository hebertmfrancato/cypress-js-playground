describe('Upload', () => {

    beforeEach(() => {
        cy.goHome()
        cy.login()
        cy.userLoggedIn() // Checkpoint (Valida que o login foi bem-sucedido)
        cy.goTo('/upload', 'Upload')
    })

    it('Deve fazer upload de um arquivo', () => {
        cy.get('input[name="doc"]')
            .selectFile('cypress/fixtures/doc.pdf')
            .then(element => {
                expect(element[0].files[0].name).to.equal('doc.pdf')
            })
    });

    it.only('Deve fazer upload de uma imagem', () => {
        cy.get('input[name="photo"]')
            .selectFile('cypress/fixtures/liga.jpg')
            .then(element => {
                expect(element[0].files[0].name).to.equal('liga.jpg')
            })

        cy.get('#image-upload')
            .find('img')
            .should('be.visible')
            .should('have.attr', 'src')
            .and('include', 'blob')
    });
});