import { faker } from "@faker-js/faker";
import { CadastroPage } from "../pages/cadastro_page.js";

Feature('Cadastro');

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

Scenario('Cadastro normal com sucesso @smoke', ({ I }) => {
    const cadastro_page = new CadastroPage(I)
    cadastro_page.cadastrar_usuario_normal(usuario_padrao.nome, usuario_padrao.email, usuario_padrao.senha)

    I.waitForText(cadastro_page.mensagem_sucesso)
    I.see(cadastro_page.mensagem_sucesso)

    I.waitInUrl('https://front.serverest.dev/home', 10)
    I.seeInCurrentUrl('https://front.serverest.dev/home')
    I.see(cadastro_page.nome_app)

})

Scenario('Cadastro admin com sucesso @smoke', ({ I }) => {
    const cadastro_page = new CadastroPage(I)
    cadastro_page.cadastrar_usuario_admin(usuario_admin.nome, usuario_admin.email, usuario_admin.senha)

    I.waitForText(cadastro_page.mensagem_sucesso)
    I.see(cadastro_page.mensagem_sucesso)

    I.waitInUrl('https://front.serverest.dev/admin/home', 10)
    I.seeInCurrentUrl('https://front.serverest.dev/admin/home')
    I.see(`Bem Vindo ${usuario_admin.nome}`)
})


const cenarios_valicadao = [
    { teste: 'nome em branco', nome: '', email: 'teste@teste.com', senha: '123', erro: 'nomeObrigatorio' },
    { teste: 'email em branco', nome: 'usuario', email: '', senha: '123', erro: 'emailObrigatorio' },
    { teste: 'email sem domínio', nome: 'usuario', email: 'teste@com', senha: '123', erro: 'emailInvalido' },
    { teste: 'senha branco', nome: 'usuario', email: 'teste@teste.com', senha: '', erro: 'senhaObrigatoria' }
]

cenarios_valicadao.forEach((cenario) => {
    Scenario(`Validação de cadastro com ${cenario.teste}`, ({ I }) => {
        const cadastro_page = new CadastroPage(I)
        cadastro_page.cadastrar_usuario_normal(cenario.nome, cenario.email, cenario.senha)

        I.waitForText(cadastro_page.erros[cenario.erro],10)
        I.see(cadastro_page.erros[cenario.erro])
    })
})

Scenario('Teste de redicionamento do botão Entrar', ({ I }) => {
    const cadastro_page = new CadastroPage(I)
    cadastro_page.acessar_cadastro()
    cadastro_page.clicar_entrar()

    I.waitInUrl('https://front.serverest.dev/login', 10)
    I.seeInCurrentUrl('https://front.serverest.dev/login')
    I.see('Login')
})
