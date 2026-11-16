class massaLogin {

//Seletores
campoUser() {return cy.get('[data-test="username"]')}
campoSenha() {return cy.get('[data-test="password"]')}
campoSenhaInvalida() {return cy.get('[data-test="password"]')}

//Métodos
preencherLogin(user, senha, senhaI){
    this.campoUser().type(user)
    this.campoSenha().type(senha)
    cy.get('[data-test="login-button"]').click()
}

senhaInvalida(user, invalida){
    this.campoUser().type(user)
    this.campoSenhaInvalida().type(invalida)
    cy.get('[data-test="login-button"]').click()
}


}



export default new massaLogin()