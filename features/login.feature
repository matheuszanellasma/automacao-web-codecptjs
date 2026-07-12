Feature: Login de usuário (Gherkin)

    Scenario: Login de usuário admin com sucesso @smoke
        Given eu tenho um usuário administrador cadastrado
        And eu acesso a página de login
        When eu preencho o login com email e senha do usuário cadastrado
        And eu clico em entrar
        Then eu sou redirecionado para a home de admin
        And eu vejo a mensagem de saudação de usuário administrador

    Scenario: Login de usuário normal com sucesso @smoke
        Given eu tenho um usuário normal cadastrado
        And eu acesso a página de login
        When eu preencho o login com email e senha do usuário cadastrado
        And eu clico em entrar
        And eu sou redirecionado para a home
        And eu vejo a mensagem de saudação de usuário normal

    Scenario: Login de usuário com senha errada
        Given eu tenho um usuário normal cadastrado
        And eu acesso a página de login
        When eu preencho o login com email do usuário cadastrado
        And eu preencho a senha errada
        And eu clico em entrar
        Then eu vejo o erro "Email e/ou senha inválidos"

    Scenario Outline: Validação de login com campos inválidos
        Given eu acesso a página de login
        When eu preencho o login com email "<email>" e senha "<senha>"
        And eu clico em entrar
        Then eu vejo o erro "<erro>"

        Examples:
            | email           | senha | erro                           |
            |                 | 123   | Email é obrigatório            |
            | teste@com       | 123   | Email deve ser um email válido |
            | xxxx@gmail.com  | 123   | Email e/ou senha inválidos     |
            | teste@gmail.com |       | Password é obrigatório         |

    Scenario: Teste de redirecionamento - Botão "Cadastre-se"
        Given eu acesso a página de login
        And eu clico em cadastrar
        Then eu vejo a página de cadastro
