// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('goHome', () => {
    cy.visit('/')
    cy.contains('h2', 'Faça login') // Checkpoint
        .should('be.visible')
})

Cypress.Commands.add('doLogin', () => {
    cy.login()
    cy.userLoggedIn() // Checkpoint (Valida que o login foi bem-sucedido)
})

Cypress.Commands.add('login', (username = Cypress.env('CYPRESS_USERNAME'), password = Cypress.env('CYPRESS_PASSWORD')) => {
    // Verifica se o username foi passado antes de tentar digitar no campo
    // Isso permite que o teste ignore o campo de e-mail quando não for necessário preencher
    if (username) {
        cy.get('[data-cy="email"]').should('be.visible')
            .type(username)
    }

    // Verifica se a senha foi passada antes de tentar digitar no campo
    // Isso permite que o teste ignore o campo de senha quando não for necessário preencher
    if (password) {
        cy.get('[data-cy="password"]')
            .should('be.visible')
            .type(password)
    }

    cy.get('[data-cy="login-button"]')
        .click()
})

Cypress.Commands.add('userLoggedIn', () => {
    cy.get('[data-cy="welcome-title"]')
        .should('be.visible')
        .and('have.text', 'Boas vindas ao Cypress Playground')
})

Cypress.Commands.add('noticeHave', (text) => {
    cy.get('.notice p')
        .should('be.visible')
        .and('have.text', text)
})

Cypress.Commands.add('goTo', (route, title) => {
    cy.get(`nav a[href="${route}"]`)
        .click()
    cy.contains('h2', title)
        .should('be.visible') // Checkpoint (Valida que a pgina de "Text Area" foi carregada corretamente)
})