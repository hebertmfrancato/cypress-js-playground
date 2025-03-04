describe('Login', () => {

  beforeEach('', ()=> {
    cy.viewport(1920, 1080)
    cy.visit('https://playground.cyskills.com.br')
  })

  it('Deve logar com sucesso', () => {
    cy.contains('h2', 'Faça login')
      .should('be.visible')
    cy.get('[data-cy="email"]').should('be.visible').type('papito@cyskills.com.br')
    cy.get('[data-cy="password"]').should('be.visible').type('showtime')
    cy.get('[data-cy="login-button"]').click()
    cy.get('[data-cy="welcome-title"]')
      .should('be.visible')
      .and('have.text', 'Boas vindas ao Cypress Playground')
  })

  it('Não deve logar com sucesso', () => {
    cy.contains('h2', 'Faça login')
      .should('be.visible')
    cy.get('[data-cy="email"]').should('be.visible').type('papito@cyskills.com.br')
    cy.get('[data-cy="password"]').should('be.visible').type('incorreta')
    cy.get('[data-cy="login-button"]').click()
    cy.get('.notice p')
      .should('be.visible')
      .and('have.text', 'E-mail ou senha incorretos. Por favor, tente novamente!')
  })

  it('Não deve logar com e-mail não cadastrado', () => {
    cy.contains('h2', 'Faça login')
      .should('be.visible')
    cy.get('[data-cy="email"]').should('be.visible').type('404@cyskills.com.br')
    cy.get('[data-cy="password"]').should('be.visible').type('showtime')
    cy.get('[data-cy="login-button"]').click()
    cy.get('.notice p')
      .should('be.visible')
      .and('have.text', 'E-mail ou senha incorretos. Por favor, tente novamente!')
  })

  it('Não deve logar com e-mail incorreto', () => {
    cy.contains('h2', 'Faça login')
      .should('be.visible')
    cy.get('[data-cy="email"]').should('be.visible').type('www.cyskills.com.br')
    cy.get('[data-cy="password"]').should('be.visible').type('showtime')
    cy.get('[data-cy="login-button"]').click()
    cy.get('.notice p')
      .should('be.visible')
      .and('have.text', 'O formato do e-mail está incorreto. Por favor, verifique e tente novamente!')
  })

  it('Não deve logar com senha inválida (menos de 6 caracteres)', () => {
    cy.contains('h2', 'Faça login')
      .should('be.visible')
    cy.get('[data-cy="email"]').should('be.visible').type('papito@cyskills.com.br')
    cy.get('[data-cy="password"]').should('be.visible').type('12345')
    cy.get('[data-cy="login-button"]').click()
    cy.get('.notice p')
      .should('be.visible')
      .and('have.text', 'A senha precisa ter pelo menos 6 caracteres. Vamos tentar de novo!')
  })
})