import { faker } from "@faker-js/faker";
import { LoginPage } from "../pages/login_page.js";
import { CadastroPage } from "../pages/cadastro_page.js";

Feature('Login');

const usuario_admin = {
    nome: faker.person.fullName(),
    email: faker.internet.email(),
    senha: faker.internet.password()
}

const usuario_padrao = {
    nome: faker.person.fullName(),
    email: faker.internet.email(),
    senha: faker.internet.password()
}


Scenario('Login admin com sucesso @smoke', ({ I }) => {
    const cadastro_page = new CadastroPage(I)
    cadastro_page.cadastrar_usuario_admin(usuario_admin.nome, usuario_admin.email, usuario_admin.senha)
    I.waitInUrl('https://front.serverest.dev/admin/home', 10)

    const login_page = new LoginPage(I)
    login_page.logar(usuario_admin.email, usuario_admin.senha)

    I.waitInUrl('https://front.serverest.dev/admin/home', 10)
    I.seeInCurrentUrl('https://front.serverest.dev/admin/home')
    I.see(`Bem Vindo ${usuario_admin.nome}`)
});

Scenario('Login usuário normal com sucesso @smoke', ({ I }) => {
    const cadastro_page = new CadastroPage(I)
    cadastro_page.cadastrar_usuario_normal(usuario_padrao.nome, usuario_padrao.email, usuario_padrao.senha)
    I.waitInUrl('https://front.serverest.dev/home', 10)

    const login_page = new LoginPage(I)
    login_page.logar(usuario_padrao.email, usuario_padrao.senha)

    I.waitInUrl('https://front.serverest.dev/home', 10)
    I.seeInCurrentUrl('https://front.serverest.dev/home')
    I.see(login_page.nome_app)
});

const cenarios = [
    { teste: 'email em branco', email: '', senha: '123', erro: 'emailObrigatorio' },
    { teste: 'email sem domínio', email: 'teste@com', senha: '123', erro: 'emailInvalido' },
    { teste: 'email não cadastrado', email: faker.internet.email(), senha: '123', erro: 'credenciaisInvalidas' },
    { teste: 'senha branco', email: faker.internet.email(), senha: '', erro: 'senhaObrigatoria' },
    { teste: 'senha errada', email: usuario_admin.email, senha: '123', erro: 'credenciaisInvalidas' }
]

cenarios.forEach((cenario) => {
    Scenario(`Validação de login com ${cenario.teste}`, ({ I }) => {
        const login_page = new LoginPage(I)

        login_page.logar(cenario.email, cenario.senha)

        I.waitForText(login_page.erros[cenario.erro], 10)
        I.see(login_page.erros[cenario.erro]);
    })
})

Scenario('Teste de redicionamento do botão Cadastre-se', ({ I }) => {
    const login_page = new LoginPage(I)

    login_page.acessar_login()
    login_page.clicar_cadastrar()

    I.waitInUrl('https://front.serverest.dev/cadastrarusuarios', 10)
    I.seeInCurrentUrl('https://front.serverest.dev/cadastrarusuarios')
    I.see('Cadastro')
})

