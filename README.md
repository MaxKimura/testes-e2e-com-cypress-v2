# Testes End-to-end com Cypress

Projeto de exemplo para demonstrar testes end-to-end (e2e) escritos com [Cypress](https://cypress.io) e executados no GitHub Actions.

## Pré-requisitos

Para clonar e executar este projeto, você precisará de:

- [git](https://git-scm.com/downloads) (usei a versão `2.34.1` ao escrever este documento)
- [Node.js](https://nodejs.org/en/) (usei a versão `v18.15.0` ao escrever este documento)
- npm (usei a versão `9.5.0` ao escrever este documento)

**Observação:** Ao instalar o Node.js, o npm é instalado automaticamente. 🚀

## Instalação

Para instalar as dependências de desenvolvimento, execute `npm install` (ou `npm i` para abreviar).

## Configuração das variáveis de ambiente

Antes de executar os testes, algumas variáveis de ambiente precisam ser configuradas.

Faça uma cópia do arquivo [`cypress.env.example.json`](./cypress.env.example.json) e renomeie para `cypress.env.json`, em seguida, defina os valores apropriados para todas as variáveis.

**Observação:** O arquivo `cypress.env.json` não é rastreado pelo git, pois está listado no arquivo `.gitignore`.

## Executando os testes

Neste projeto, você pode executar os testes nos modos interativo e headless, tanto em viewports de desktop quanto de tablet.

### Modo headless

Execute `npm test` (ou `npm t` para abreviar) para rodar todos os testes no modo headless usando uma viewport de desktop.

Execute `npm run test:tablet` para rodar os testes apropriados no modo headless usando uma viewport de tablet.

### Modo interativo

Execute `npm run cy:open` para abrir o __Cypress App__ e rodar os testes no modo interativo usando uma viewport de desktop.

Execute `npm run cy:open:tablet` para abrir o __Cypress App__ e rodar os testes no modo interativo usando uma viewport de tablet.

---

Feito com ❤️ por [seu-nome-aqui](https://www.linkedin.com/in/maxwell-kimura/).
