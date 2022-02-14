//VARIAVÉIS PARA ARMAZENAR DADOS DO USUÁRIO NO SISTEMA
let listaUser = []
listaUser.push(
    {
        login: "Pedro",
        senha: "123456",
        acesso: "Funcionário" 
    }
)
listaUser.push(
    {
        login: "Lucas",
        senha: "000123",
        acesso: "Administrador"
    }
)
listaUser.push(
    {
        login: "Maria",
        senha: "000456",
        acesso: "Usuário"
    }
)
listaUser.push(
    {
        login: "Joao",
        senha: "000789",
        acesso: "Chefe de Setor"
    }
)
// INICIO FUNÇÃO DO BOTÃO DO FORMULÁRIO DE LOGIN
function entrar(){
    let validado = true
    //VARIÁVEIS PARA ARMAZENAR INFORMAÇÕES DOS INPUT'S DA TELA DE LOGIN
    let login = document.getElementById('inputLogin').value
    let senha = document.getElementById('inputSenha').value
    let acesso = document.querySelector('input[name="nivelacesso"]:checked').value

    //VALIDAÇÃO CAMPO VAZIO
    if(login == "" || senha == ""){
        window.alert("Verifique se os campos foram preenchidos corretamente!")
    }else{
        listaUser.forEach((item) => {
            if(login == item.login && senha == item.senha && acesso == item.acesso){
                validado = true
            }else{
                validado = false
            }
        })
        if(validado){
            window.alert("Acesso permitido")
            switch(acesso) {
                case 'Funcionário':
                    window.alert("Você está logado como "+acesso)
                    window.location.href = "telainicialfun.html";
                    break;
                case 'Usuário':
                    window.alert("Você está logado como "+acesso)
                    window.location.href = "telainicialuser.html";
                    break;
                case 'Administrador':
                    window.alert("Você está logado como "+acesso)
                    window.location.href = "telainicialadm.html";
                    break;
                case 'Chefe de Setor':
                    window.alert("Você está logado como "+acesso)
                    window.location.href = "telainicialchefe.html";
                    break;
            }
        }
        else{
            window.alert("Verifique suas informações e tente novamente!")
            window.alert("Informações: "+login+" "+senha+" "+acesso)
        }
    }

}// FIM FUNÇÃO DO BOTÃO DO FORMULÁRIO DE LOGIN