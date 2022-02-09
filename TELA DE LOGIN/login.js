
let dadosusuariononistema = {
    usersis: 'plcsilveira',
    senhasis: '123456',
    acessosis: 'Funcionário'
}

function entrar(){
    let user = document.getElementById('login').value
    let senha = document.getElementById('senha').value
    let acesso = document.querySelector('input[name="nivelacesso"]:checked').value
    let dadosusuario = {
        luser: user,
        lsenha: senha,
        lacesso: acesso
    }
    if(dadosusuario.luser == dadosusuariononistema.usersis && dadosusuario.lsenha == dadosusuariononistema.senhasis && dadosusuario.lacesso == dadosusuariononistema.acessosis){
        window.alert("Acesso permitido")
    }else{
        window.alert("Acesso negado! O usuário ou a senha está incorreto")
    }
}

