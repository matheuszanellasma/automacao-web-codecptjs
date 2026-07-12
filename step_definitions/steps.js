const { I } = inject();
import { faker } from '@faker-js/faker';
import { CadastroPage } from '../pages/cadastro_page.js';
import { LoginPage } from '../pages/login_page.js';

let cadastro_page;
let usuario;
let login_page

Given('eu acesso a página de cadastro', () => {
  cadastro_page = new CadastroPage(I);
  cadastro_page.acessar_cadastro();
});


When('eu preencho o cadastro com dados válidos aleatórios', () => {
  usuario = {
    nome: faker.person.fullName(),
    email: faker.internet.email(),
    senha: faker.internet.password()
  };

  cadastro_page.preencher_nome(usuario.nome);
  cadastro_page.preencher_email(usuario.email);
  cadastro_page.preencher_senha(usuario.senha);
});

When('eu preencho o cadastro com nome {string}, email {string} e senha {string}', (nome, email, senha) => {
  cadastro_page.preencher_nome(nome);
  cadastro_page.preencher_email(email);
  cadastro_page.preencher_senha(senha);
});

When('eu marco a opção administrador', () => {
  cadastro_page.check_opcao_administrador();
});

When('eu clico em cadastrar', () => {
  cadastro_page.clicar_cadastrar();
});

Then('eu vejo a mensagem de sucesso', () => {
  I.waitForText(cadastro_page.mensagem_sucesso, 10);
  I.see(cadastro_page.mensagem_sucesso);
});

Then('eu sou redirecionado para a home', () => {
  I.waitInUrl('https://front.serverest.dev/home', 10);
  I.seeInCurrentUrl('https://front.serverest.dev/home');
  I.see(cadastro_page.nome_app);
});

Then('eu sou redirecionado para a home de admin', () => {
  I.waitInUrl('https://front.serverest.dev/admin/home', 10);
  I.seeInCurrentUrl('https://front.serverest.dev/admin/home');
});

Then('eu vejo a mensagem de saudação de usuário normal', () => {
  I.see(cadastro_page.nome_app)
});

Then('eu vejo a mensagem de saudação de usuário administrador', () => {
  I.see(`Bem Vindo ${usuario.nome}`)
});

Then('eu vejo o erro {string}', (mensagem) => {
  I.waitForText(mensagem, 10);
  I.see(mensagem);
});

Then('eu vejo a página de login', () => {
  I.waitInUrl('https://front.serverest.dev/login', 10)
  I.seeInCurrentUrl('https://front.serverest.dev/login')
  I.see('Login')
})


Given('eu acesso a página de login', () => {
  login_page = new LoginPage(I);
  login_page.acessar_login();
});


Given('eu tenho um usuário administrador cadastrado', () => {
  cadastro_page = new CadastroPage(I)

  usuario = {
    nome: faker.person.fullName(),
    email: faker.internet.email(),
    senha: faker.internet.password()
  };

  cadastro_page.cadastrar_usuario_admin(usuario.nome, usuario.email, usuario.senha)
  I.waitInUrl('https://front.serverest.dev/admin/home', 10);

})

Given('eu tenho um usuário normal cadastrado', () => {
  cadastro_page = new CadastroPage(I)

  usuario = {
    nome: faker.person.fullName(),
    email: faker.internet.email(),
    senha: faker.internet.password()
  };

  cadastro_page.cadastrar_usuario_normal(usuario.nome, usuario.email, usuario.senha)
  I.waitInUrl('https://front.serverest.dev/home', 10);

})

When('eu preencho o login com email e senha do usuário cadastrado', () => {
  login_page.preencher_email(usuario.email)
  login_page.preencher_senha(usuario.senha)
})

When('eu clico em entrar', () => {
  login_page = new LoginPage(I)
  login_page.entrar()
})


When('eu preencho o login com email {string} e senha {string}', (email, senha) => {
  login_page.preencher_email(email)
  login_page.preencher_senha(senha)
})


When('eu preencho o login com email do usuário cadastrado', () => {
  login_page.preencher_email(usuario.email)
})

When('eu preencho a senha errada', () => {
  login_page.preencher_senha(usuario.senha + '1')
})

Then('eu vejo a página de cadastro', () => {
  I.waitInUrl('https://front.serverest.dev/cadastrarusuarios', 10)
  I.seeInCurrentUrl('https://front.serverest.dev/cadastrarusuarios')
  I.see('Cadastro')
})

