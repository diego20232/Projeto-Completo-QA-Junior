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

clickCarrinho(user, senha) {
    this.campoUser().type(user)
    this.campoSenha().type(senha)
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
}

removerProduto(user, senha) {
    this.campoUser().type(user)
    this.campoSenha().type(senha)
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="remove-sauce-labs-backpack"]').click()
    cy.get('[data-test="continue-shopping"]').click()
}


}



export default new massaLogin()