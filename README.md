# Projeto Completo QA Júnior

![Testes E2E](https://github.com/diego20232/Projeto-Completo-QA-Junior/actions/workflows/tests.yml/badge.svg)

Projeto de portfólio que cobre o ciclo básico de QA no e-commerce [Sauce Demo](https://www.saucedemo.com): planejamento, casos de teste, execução manual, registro de bugs e automação E2E com integração contínua.

## O que foi feito

- **Planejamento:** [plano de testes](docs/plano-de-testes.md)
- **Casos de teste:** [casos em Gherkin](docs/casos-de-teste.md)
- **Execução manual:** resultados registrados nos casos de teste
- **Bugs encontrados:** relatórios em [docs/bugs](docs/bugs)
- **Automação:** testes E2E de login, carrinho e checkout com Cypress
- **CI:** execução automática no GitHub Actions a cada push

## Tecnologias

- Cypress (JavaScript)
- Page Object Model (POM)
- GitHub Actions
- Gherkin (documentação dos cenários)

## Estrutura do projeto

```
├── docs/
│   ├── plano-de-testes.md
│   ├── casos-de-teste.md
│   ├── matriz-rastreabilidade.md
│   └── bugs/
├── e2e/
│   └── cypress/
│       ├── e2e/            # testes
│       └── support/
│           ├── commands.js # comandos customizados
│           └── pages/      # page objects
└── .github/workflows/tests.yml
```

## Estratégia de testes

1. Testes manuais exploratórios com `standard_user` e `problem_user`
2. Casos de teste escritos em Gherkin, com prioridade
3. Automação dos fluxos críticos (login, carrinho, checkout)
4. Execução contínua no GitHub Actions

## Como rodar

Pré-requisito: Node.js instalado.

```bash
git clone https://github.com/diego20232/Projeto-Completo-QA-Junior.git
cd Projeto-Completo-QA-Junior/e2e
npm install
npx cypress open   # modo interativo
npx cypress run    # modo headless
```

## Resultados

- ✅ 6 casos de teste automatizados (CT01 a CT06)
- 🐞 Bugs documentados em `docs/bugs/`

## Autor

Diego Sampaio de Oliveira
[LinkedIn](https://www.linkedin.com/in/diegosampaio-dev/) | [GitHub](https://github.com/diego20232)