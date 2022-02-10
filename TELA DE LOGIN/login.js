
let dadosusuariononistema = {
    usersis: 'plcsilveira',
    senhasis: '123456',
    acessosis: 'Funcionário'
}

function entrar(){
    let user = document.getElementById('inputLogin').value
    let senha = document.getElementById('inputSenha').value
    let acesso = document.querySelector('input[name="nivelacesso"]:checked').value
    let dadosusuario = {
        luser: user,
        lsenha: senha,
        lacesso: acesso
    }
    if(dadosusuario.luser == dadosusuariononistema.usersis && dadosusuario.lsenha == dadosusuariononistema.senhasis && dadosusuario.lacesso == dadosusuariononistema.acessosis){
        window.alert("Acesso permitido")
        if(acesso == 'Funcionário'){
            window.alert("Você está logado como "+acesso)
            window.location.href = "telainicialfun.html"
        }
    }else{
        window.alert("Verifique seus dados e tente novamente!")
    }
}

