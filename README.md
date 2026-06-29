[![CI](https://github.com/matheuszanellasma/automacao-web-codecptjs/actions/workflows/push.yml/badge.svg)](https://github.com/matheuszanellasma/automacao-web-codecptjs/actions)

# 🎭 Automação Web com CodeceptJS

## 💻 Sobre o projeto

Este repositório contém um projeto de automação de testes web. O objetivo principal desta suíte de testes é validar de forma automatizada os fluxos essenciais de entrada de usuários na aplicação, garantindo a qualidade das páginas de Login e Cadastro.

## 🛠️ Tecnologias Utilizadas

Neste projeto, utilizamos as seguintes ferramentas:

- **[Node.js](https://nodejs.org/en/)**
- **[CodeceptJS](https://codecept.io/)**
- **[Playwright](https://playwright.dev/)** (helper)
- **Padrão de Projeto: Page Objects Pattern (PoP)**
- **Faker.js:** geração dinâmica de dados de teste aumentando a cobertura de variações

## 🌐 Ambiente de Testes

- **URL da Aplicação:** Frontend da [Serverest](https://front.serverest.dev/)

## 📝 Planejamento e Casos de Teste Mapeados

### 🔹 Página de Login

- **CT1:** Login de admin com sucesso (smoke)
- **CT2:** Login de usuário normal com sucesso (smoke)
- Validação de campos obrigatórios de login usando Matriz de Dados
  - **CT3:** Login mal sucedido com e-mail em branco
  - **CT4:** Login mal sucedido com e-mail sem domínio
  - **CT5:** Login mal sucedido com e-mail não cadastro
  - **CT6:** Login mal sucedido com senha em branco
  - **CT7:** Login mal sucedido com senha errada
- **CT8:** Teste de redirecionamento do botão "Cadastre-se"

### 🔹 Página de Cadastro

- **CT1:** Cadastro de admin com sucesso (smoke)
- **CT2:** Cadastro de usuário normal com sucesso (smoke)
- Validação de campos obrigatórios de login usando Matriz de Dados
  - **CT3:** Cadastro mal sucedido com nome em branco
  - **CT4:** Cadastro mal sucedido com e-mail em branco
  - **CT5:** Cadastro mal sucedido com e-mail sem domínio
  - **CT6:** Cadastro mal sucedido com senha em branco
- **CT7:** Teste de redirecionamento do botão "Cadastre-se"
  
  ---

## ⚙️ Integração Contínua (CI/CD)

O projeto possui uma esteira automatizada de integração contínua implementada com **GitHub Actions**:

- **Gatilho:** A esteira é disparada automaticamente a cada evento de `push` realizado na branch `master`.
- **Ação:** O pipeline executa os testes **Smoke** 
- **Armazenamento:** O relatório é armazenado como artifact no GitHub por **30 dias**, permitindo análise dos resultados mesmo após a conclusão do pipeline.

## 🛠️ Como Executar os Testes Localmente

### Pré-requisitos: Node.js (versão 18 ou superior recomendada)

### Passo a Passo (Configuração e Execução)

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
npm install
npx playwright install
npx codeceptjs run
```

## 👤 Autor

* **Matheus Koehler Zanella** - Quality Assurance Engineer
