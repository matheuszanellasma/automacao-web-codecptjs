export class LoginPage {

    constructor(I) {
        this.I = I;

        this.rota = '/login'
        // Seletores
        this.email_seletor = '#email';
        this.senha_seletor = '#password';
        this.botao_entrar = '[data-testid="entrar"]';
        this.botao_cadastro = '[data-testid="cadastrar"]';
    }

    get nome_app() { return 'Serverest Store' }
    get erros() {
        return {
            emailObrigatorio: 'Email é obrigatório',
            emailInvalido: 'Email deve ser um email válido',
            credenciaisInvalidas: 'Email e/ou senha inválidos',
            senhaObrigatoria: 'Password é obrigatório'
        }
    }

    acessar_login() {
        this.I.amOnPage(this.rota);
    }

    preencher_email(email) {
        this.I.fillField(this.email_seletor, email)
    }

    preencher_senha(senha) {
        this.I.fillField(this.senha_seletor, senha)
    }

    entrar() {
        this.I.click(this.botao_entrar)
    }

    clicar_cadastrar() {
        this.I.click(this.botao_cadastro)
    }

    logar(email, password) {
        this.acessar_login();
        this.preencher_email(email);
        this.preencher_senha(password);
        this.entrar();
    }
}
