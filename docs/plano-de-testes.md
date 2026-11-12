# Plano de Testes - Sauce Demo

## 1. Objetivo
Validar os principais fluxos do e-commerce Sauce Demo (login, produtos, carrinho e checkout).

## 2. Escopo
**Dentro do escopo:**
- Login e logout
- Listagem e ordenação de produtos
- Carrinho de compras
- Checkout

**Fora do escopo:**
- Testes de API
- Testes de performance e segurança

## 3. Tipos de teste
- Funcional (manual)
- Regressão automatizada (E2E com Cypress)

## 4. Ferramentas
- Cypress, GitHub, GitHub Actions

## 5. Ambiente
- URL: https://www.saucedemo.com
- Navegador: Chrome
- SO: Windows

## 6. Critérios de entrada
- Site acessível
- Casos de teste escritos

## 7. Critérios de saída
- 100% dos casos executados
- Bugs críticos documentados

## 8. Riscos
- Site de terceiros pode sair do ar ou mudar
- Usuário `problem_user` tem falhas intencionais

------------------------------------------------------------------------------------------

# Casos de Teste - Sauce Demo

Usuários de teste (senha de todos: `secret_sauce`):
- `standard_user` (fluxo normal)
- `locked_out_user` (bloqueado)
- `problem_user` (tem falhas de propósito)

## Resumo

| ID | Funcionalidade | Cenário | Prioridade | Status |
|----|----------------|---------|------------|--------|
| CT01 | Login | Login com sucesso | Alta | Passou |
| CT02 | Login | Senha inválida | Alta | Passou |
| CT03 | Login | Usuário bloqueado | Média | Passou |
| CT04 | Carrinho | Adicionar produto | Alta | Passou |
| CT05 | Carrinho | Remover produto | Média | Passou |
| CT06 | Checkout | Compra finalizada com sucesso | Alta | Passou |
| CT07 | Checkout | Ao colocar as informações pessoais deve avançar para tela de pagamento | Alta | Não passou |

## Detalhamento

```gherkin
Funcionalidade: Login

  # CT01
  Cenário: Login com sucesso
    Dado que estou na página de login
    Quando informo o usuário "standard_user" e a senha "secret_sauce"
    E clico em "Login"
    Então vejo a lista de produtos

  # CT02
  Cenário: Login com senha inválida
    Dado que estou na página de login
    Quando informo o usuário "standard_user" e a senha "errada"
    E clico em "Login"
    Então vejo a mensagem de erro de credenciais inválidas

  # CT03
  Cenário: Login com usuário bloqueado
    Dado que estou na página de login
    Quando informo o usuário "locked_out_user" e a senha "secret_sauce"
    E clico em "Login"
    Então vejo a mensagem de que o usuário foi bloqueado

Funcionalidade: Carrinho

  # CT04
  Cenário: Adicionar produto ao carrinho
    Dado que estou logado como "standard_user"
    Quando clico em "Add to cart" em um produto
    Então o ícone do carrinho mostra 1 item

  # CT05
  Cenário: Remover produto do carrinho
    Dado que tenho 1 produto no carrinho
    Quando clico em "Remove"
    Então o carrinho fica vazio

Funcionalidade: Checkout

  # CT06
  Cenário: Finalizar compra com sucesso
    Dado que tenho 1 produto no carrinho
    Quando preencho nome, sobrenome e CEP no checkout
    E confirmo a compra
    Então vejo a mensagem de pedido concluído

  #CT07
  Cenário: Ao colocar as informações pessoais deve avançar para tela de pagamento
    Dado que estou na tela de checkout (Suas informações)
    Quando eu digitar nome, sobrenome e CEP
    E clicar em avançar 
    Então a dela de pagamento deve aparecer pra mim 

