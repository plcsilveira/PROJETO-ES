//VARIAVÉIS LOGIN
let listaUser = []
listaUser.push(
    {
        login: "Pedro",
        senha: "123456",
        acesso: "FUNCIONARIO"
    }
)
listaUser.push(
    {
        login: "Lucas",
        senha: "000123",
        acesso: "ADMINISTRADOR"
    }
)
listaUser.push(
    {
        login: "Maria",
        senha: "000456",
        acesso: "USUARIO"
    }
)
listaUser.push(
    {
        login: "Joao",
        senha: "000789",
        acesso: "CHEFE"
    }
)

//FUNÇÃO VALIDAÇÃO DADOS USUÁRIO
let validado = (login, senha, acesso) => {
    for (i = 0; i < listaUser.length; i++) {
        if (listaUser[i].login == login && listaUser[i].senha == senha && listaUser[i].acesso == acesso) {
            return true
        } else if (!!(listaUser[i].login == login && listaUser[i].senha == senha && listaUser[i].acesso == acesso)) {
            return false
        }
    }
}

// INICIO FUNÇÃO DO BOTÃO DO FORMULÁRIO DE LOGIN
function entrar() {
    //VARIÁVEIS PARA ARMAZENAR INFORMAÇÕES DOS INPUT'S DA TELA DE LOGIN
    let login = document.getElementById('inputLogin').value
    let senha = document.getElementById('inputSenha').value
    let acesso = document.querySelector('input[name="nivelacesso"]:checked').value

    //VALIDAÇÃO CAMPO VAZIO
    if (login == "" || senha == "") {
        window.alert("Verifique se os campos foram preenchidos corretamente!")
    } else {
        switch (acesso) {
            case 'FUNCIONARIO':
                if (validado(login, senha, acesso)) {
                    alert("Acesso Permitido")
                    window.alert("Você está logado como " + acesso)
                    window.location.href = "telainicialfun.html"
                } else {
                    alert("Verifique seus dados e tente novamente!")
                }
                break

            case 'USUARIO':
                if (validado(login, senha, acesso)) {
                    alert("Acesso Permitido")
                    window.alert("Você está logado como " + acesso)
                    window.location.href = "telainicialuser.html"
                } else {
                    alert("Verifique seus dados e tente novamente!")
                }
                break

            case 'ADMINISTRADOR':
                if (validado(login, senha, acesso)) {
                    alert("Acesso Permitido")
                    window.alert("Você está logado como " + acesso)
                    window.location.href = "telainicialadm.html"
                } else {
                    alert("Verifique seus dados e tente novamente!")
                }
                break

            case 'CHEFE':
                if (validado(login, senha, acesso)) {
                    alert("Acesso Permitido")
                    window.alert("Você está logado como " + acesso)
                    window.location.href = "telainicialchefe.html"
                } else {
                    alert("Verifique seus dados e tente novamente!")
                }
                break
        }
    }
}// FIM FUNÇÃO DO BOTÃO DO FORMULÁRIO DE LOGIN