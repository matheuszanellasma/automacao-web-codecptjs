export class CadastroPage {

    constructor(I) {
        this.I = I

        this.rota = '/cadastrarusuarios'

        this.seletor_nome = '#nome'
        this.seletor_email = '#email'
        this.seletor_senha = '#password'

        this.botao_cadastrar = '[data-testid="cadastrar"]'
        this.botao_entrar = '[data-testid="entrar"]';
        this.botao_administrador = '#administrador'

    }
 
    get erros() {
        return {
            nomeObrigatorio: 'Nome é obrigatório',
            emailObrigatorio: 'Email é obrigatório',
            emailInvalido: 'Email deve ser um email válido',
            senhaObrigatoria: 'Password é obrigatório'
        }
    }

    get mensagem_sucesso() { return 'Cadastro realizado com sucesso' }
    get nome_app() { return 'Serverest Store' }

    acessar_cadastro() {
        this.I.amOnPage(this.rota);
    }

    preencher_nome(email) {
        this.I.fillField(this.seletor_nome, email)
    }

    preencher_email(email) {
        this.I.fillField(this.seletor_email, email)
    }

    preencher_senha(senha) {
        this.I.fillField(this.seletor_senha, senha)
    }

    clicar_cadastrar() {
        this.I.click(this.botao_cadastrar)
    }

    clicar_entrar() {
        this.I.click(this.botao_entrar)
    }

    check_opcao_administrador() {
        this.I.click(this.botao_administrador)
    }

    cadastrar_usuario_normal(nome, email, password) {
        this.acessar_cadastro();
        this.preencher_nome(nome)
        this.preencher_email(email);
        this.preencher_senha(password);
        this.clicar_cadastrar();
    }

    cadastrar_usuario_admin(nome, email, password) {
        this.acessar_cadastro();
        this.preencher_nome(nome)
        this.preencher_email(email);
        this.preencher_senha(password);
        this.check_opcao_administrador()
        this.clicar_cadastrar();
    }
}