import massaLogin from "../support/pages/pom";


describe('Rodando os CT', () => {
  

beforeEach(() => {
  cy.visit('/')
});

it('CT01 - Login com sucesso', () => {
  massaLogin.preencherLogin('standard_user', 'secret_sauce')
  cy.contains('Swag Labs').should('be.visible')
});


it('CT02 - Senha Inválida', () => {
  massaLogin.senhaInvalida('standard_user', 'senhaErrada')
  cy.contains('Epic sadface: Username and password do not match any user in this service').should('be.visible')
});

it('Usuário Bloqueado', () => {
  massaLogin.preencherLogin('locked_out_user', 'secret_sauce')
  cy.contains('Epic sadface: Sorry, this user has been locked out.').should('be.visible')
});


});