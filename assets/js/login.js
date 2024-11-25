let users = [];

// Recupera os usuários salvos no localStorage
let listUsers = localStorage.getItem('users');

users = listUsers ? JSON.parse(listUsers) : [];

// Função para cadastrar um novo usuário
function cadastrar() {

    // Define uma função para verificar se o CPF já está cadastrado
    function verificarUserExistente(username) {
        return users.some(user => user.username === username);
    }

    // Obtém os valores dos inputs
    let username = document.getElementById("username").value;
    let senha = document.getElementById("senha").value;

    // Verifica se todos os campos foram preenchidos
    if (username && senha) {

        // Verifica se o CPF já está cadastrado
        if (verificarUserExistente(username)) {
            alert("Este nome ja está em uso!");
            return;
        }


        // Cria um novo objeto de usuário
        let user = {
            username: username,
            senha: senha,
        };

        // Adiciona o novo usuário ao array de usuários
        users.push(user);

        // Salva o array de usuários atualizado no localStorage
        localStorage.setItem('users', JSON.stringify(users));

        alert("Usuário cadastrado com sucesso!");
        alert("Efetue o login para continuar")

        document.getElementById("username").value = '';
        document.getElementById("senha").value = '';

    } else {
        // Alerta se algum campo não foi preenchido
        alert("Preencha todos os campos!");
    }

    // verificar
    console.log(users);
}

function entrar() {


    let username = document.getElementById("usernamel").value;
    let senha = document.getElementById("senhal").value;

    if (username && senha) {
        let userExistente = users.find(user =>
            user.username === username &&
            user.senha === senha
        );

        document.getElementById("username").value = '';
        document.getElementById("senha").value = '';

        if (userExistente) {
            let userLogado = userExistente;
            localStorage.setItem('userLogado', JSON.stringify(userLogado));
            
            console.log(userLogado.username);
        } else{
            alert("Dados incorretos ou usuário inexistente");
        }
        window.location.href = "/index.html";
        alert("usuario logado");
        alert("caso não seja redirecionado clique em 'VOLTAR' ");
    } 
   
}

//parte para usuario já logado

let userLogado = JSON.parse(localStorage.getItem('userLogado'));
console.log(userLogado.username);

if (userLogado) {
    let logado = document.getElementById('userLogado');
    logado.innerText = userLogado.username;

    let sair = document.getElementById('sair');
    sair.innerHTML = '<a class="logar-nav" id="sair" href="/assets/html/login.html">SAIR</a>'
}
