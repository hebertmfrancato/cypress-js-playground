describe('Login', () => {

  // Variáveis globais para os dados de login
  const username = Cypress.env('CYPRESS_USERNAME');
  const Password = Cypress.env('CYPRESS_PASSWORD');
  const invalidEmail = '404@cyskills.com.br';
  const invalidEmailFormat = 'www.cyskills.com.br';
  const shortPassword = '12345'; // Senha inválida (menos de 6 caracteres)
  const invalidPassword = 'incorreta'; // Senha inválida (valor 'incorreta')

  beforeEach(() => {
    cy.goHome()
  })

  it('Deve logar com sucesso', () => {
    cy.login()
    cy.userLoggedIn()
  })

  it('Não deve logar com senha inválida', () => {
    cy.login(username, invalidPassword)
    cy.noticeHave('E-mail ou senha incorretos. Por favor, tente novamente!')
  })

  it('Não deve logar com e-mail não cadastrado', () => {
    cy.login(invalidEmail, invalidPassword)
    cy.noticeHave('E-mail ou senha incorretos. Por favor, tente novamente!')
  })

  it('Não deve logar com e-mail incorreto', () => {
    cy.login(invalidEmailFormat, Password)
    cy.noticeHave('O formato do e-mail está incorreto. Por favor, verifique e tente novamente!')
  })

  it('Não deve logar com senha inválida (menos de 6 caracteres)', () => {
    cy.login(username, shortPassword)
    cy.noticeHave('A senha precisa ter pelo menos 6 caracteres. Vamos tentar de novo!')
  })
})