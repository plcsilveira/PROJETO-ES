
let dadosusuariononistema = []
dadosusuariononistema = {
    usersis: 'Pedro',
    senhasis: '123456',
    acessosis: 'Funcionário'
}
dadosusuariononistema[1].usersis="Lucas"
dadosusuariononistema[1].senhasis="123456"
dadosusuariononistema[1].aessosis="Administrador"

function entrar(){
    let user = document.getElementById('inputLogin').value
    let senha = document.getElementById('inputSenha').value
    let acesso = document.querySelector('input[name="nivelacesso"]:checked').value

    if(user == dadosusuariononistema.usersis && senha == dadosusuariononistema.senhasis && acesso == dadosusuariononistema.acessosis){
        window.alert("Acesso permitido")
        if(acesso == 'Funcionário'){
            window.alert("Você está logado como "+acesso)
            window.location.href="telainicialfun.html"
        }
    }else{
        window.alert("Verifique seus dados e tente novamente!")
        
    }
}

