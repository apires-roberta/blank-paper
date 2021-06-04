var header_deslogado = `
    <div class="header">
<div class="container">
    <h2><span class="title">blank paper</span></h2>
    <ul>
        <li><a href="index.html"><span class="text-green2">Home</span></a></li>
        <li><a href="about-me.html">about me</a></li>
        <li><a href="my-works.html">my works</a></li>
        <li><a href="contact.html">contact</a></li>
        <li><a href="login.html">login</a></li>
    </ul>
</div>
</div>
`;

var header_logado = `
    <div class="header">
<div class="container">
    <h2><span class="title">blank paper</span></h2>
    <ul>
        <li><a href="index.html"><span class="text-green2">Home</span></a></li>
        <li><a href="about-me.html">about me</a></li>
        <li><a href="my-works.html">my works</a></li>
        <li><a href="contact.html">contact</a></li>
        <li>Olá, ${sessionStorage.getItem('nome')}</li>
        <li><a onclick="logoff()">Sair</a></li>
    </ul>
</div>
</div>
`;

var usuario_logado = 0;
if (sessionStorage.getItem('logado') == 1) {
    usuario_logado = 1;
} else {
    usuario_logado = 0;
};


alterar_header(usuario_logado);

function alterar_header(toggle) {
    var header_conteudo = "";
    if (toggle == 1) {
        header_conteudo = header_logado;
    } else {
        header_conteudo = header_deslogado;
    }

    header.innerHTML = header_conteudo;
}

var nome = "";
function entrar() {
    aguardar();
    var formulario = new URLSearchParams(new FormData(form_login));
    fetch("/usuarios/autenticar", {
        method: "POST",
        body: formulario
    }).then(resposta => {

        if (resposta.ok) {

            resposta.json().then(json => {

                sessionStorage.login_usuario_meuapp = json.login;
                sessionStorage.nome_usuario_meuapp = json.nome;

                // adicionando nome na variavel
                nome = sessionStorage.nome_usuario_meuapp = json.nome;
                sessionStorage.setItem('nome', nome);
                sessionStorage.setItem('logado', 1);

                window.location.href = 'index.html';

                var usuario = document.getElementsByName('login')[0].value;
                var senha = document.getElementsByName('senha')[0].value;
                if (usuario == "roberta2003p@gmail.com" && senha == "rob123") {
                    window.location = "admin-page.html";
                }
            });

        } else {

            console.log('Erro de login!');

            resposta.text().then(texto => {
                console.error(texto);
                finalizar_aguardar(texto);
            });
        }
    });

    return false;
}

function aguardar() {
    btn_entrar.disabled = true;
    // img_aguarde.style.visibility = 'visible';
    div_erro.style.visibility = 'hidden';
}

function finalizar_aguardar(resposta) {
    btn_entrar.disabled = false;
    // img_aguarde.style.visibility = 'hidden';
    div_erro.style.visibility = 'visible';
    div_erro.innerHTML = resposta;
}