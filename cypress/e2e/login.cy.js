describe('Login', () => {

  beforeEach(() => {
    cy.viewport(1920, 1080)
    cy.visit('https://playground.cyskills.com.br')
    cy.contains('h2', 'Faça login') // Checkpoint
      .should('be.visible')
  })

  it('Deve logar com sucesso', () => {
    cy.login('papito@cyskills.com.br', 'showtime')
    cy.get('[data-cy="welcome-title"]')
      .should('be.visible')
      .and('have.text', 'Boas vindas ao Cypress Playground')
  })

  it('Não deve logar com senha inválida', () => {
    cy.login('papito@cyskills.com.br', 'incorreta')
    cy.noticeHave('E-mail ou senha incorretos. Por favor, tente novamente!')
  })

  it('Não deve logar com e-mail não cadastrado', () => {
    cy.login('404@cyskills.com.br', 'incorreta')
    cy.noticeHave('E-mail ou senha incorretos. Por favor, tente novamente!')
  })

  it('Não deve logar com e-mail incorreto', () => {
    cy.login('www.cyskills.com.br', 'showtime')
    cy.noticeHave('O formato do e-mail está incorreto. Por favor, verifique e tente novamente!')
  })

  it('Não deve logar com senha inválida (menos de 6 caracteres)', () => {
    cy.login('papito@cyskills.com.br', '12345')
    cy.noticeHave('A senha precisa ter pelo menos 6 caracteres. Vamos tentar de novo!')
  })

  Cypress.Commands.add('login', (email, password) => {
    cy.get('[data-cy="email"]').should('be.visible').type(email)
    cy.get('[data-cy="password"]').should('be.visible').type(password)
    cy.get('[data-cy="login-button"]').click()
  })

  Cypress.Commands.add('noticeHave', (text) => {
    cy.get('.notice p')
      .should('be.visible')
      .and('have.text', text)
  })
})