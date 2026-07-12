Feature: Cadastro de usuário (Gherkin)

  Scenario: Cadastro normal com sucesso @smoke
    Given eu acesso a página de cadastro
    When eu preencho o cadastro com dados válidos aleatórios
    And eu clico em cadastrar
    Then eu vejo a mensagem de sucesso
    And eu sou redirecionado para a home
    And eu vejo a mensagem de saudação de usuário normal

  Scenario: Cadastro admin com sucesso @smoke
    Given eu acesso a página de cadastro
    When eu preencho o cadastro com dados válidos aleatórios
    And eu marco a opção administrador
    And eu clico em cadastrar
    Then eu vejo a mensagem de sucesso
    And eu sou redirecionado para a home de admin
    And eu vejo a mensagem de saudação de usuário administrador

  Scenario Outline: Validação de cadastro com campos inválidos
    Given eu acesso a página de cadastro
    When eu preencho o cadastro com nome "<nome>", email "<email>" e senha "<senha>"
    And eu clico em cadastrar
    Then eu vejo o erro "<erro>"

    Examples:
      | nome    | email           | senha | erro                           |
      |         | teste@teste.com | 123   | Nome é obrigatório             |
      | usuario |                 | 123   | Email é obrigatório            |
      | usuario | teste@com       | 123   | Email deve ser um email válido |
      | usuario | teste@teste.com |       | Password é obrigatório         |


  Scenario: Teste de redirecionamento - Botão "Entrar"
    Given eu acesso a página de cadastro
    And eu clico em entrar
    Then eu vejo a página de login
