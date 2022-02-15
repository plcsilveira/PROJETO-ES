class Equipamento{

    constructor(){
        this.id = 1
        this.arrayEquipamentos = []
    }

    //INICIO DA FUNÇÃO SALVAR DA TELA INICIAL DO FUNCIONÁRIO
    salvar(){
        let equipamento = {}
        equipamento = this.lerDados()
        if(this.validaCampo(equipamento)){
            this.adicionar(equipamento)
        }console.log(this.arrayEquipamentos)
        this.listaTabela()
        this.cancelar()
    }

    //FUNÇÃO ADICIONAR DADOS DO EQUIPAMENTO EM UM VETOR
    adicionar(equipamento){
        this.arrayEquipamentos.push(equipamento)
        this.id++
    }

    //FUNÇÃO PARA PEGAR OS DADOS DOS INPUT'S DO FORMULÁRIO DA TELA INICIAL DO FUNCIONÁRIO
    lerDados(){
        let equipamento = {}
        equipamento.nome = document.getElementById('inputNome').value
        equipamento.categoria = document.getElementById('inputCategoria').value
        equipamento.data = document.getElementById('inputData').value
        equipamento.id = this.id
        let s = document.getElementById('selectSit')
        equipamento.situacao = s.options[s.selectedIndex].value
        
        return equipamento
    }

    //FUNÇÃO VALIDAR CAMPOS INPUT DA TELA DE EQUIPAMENTOS
    validaCampo(equipamento){
        let msg = ''

        if(equipamento.nome == ''){
            msg += 'Informe o nome do equipamento \n'
        }
        if(equipamento.categoria == ''){
            msg += 'Informe a categoria do equipamento \n'
        }
        if(equipamento.data == ''){
            msg += 'Informe a data do equipamento \n'
        }
        if(msg == ''){
            return true
        }else{
            window.alert("Erro: "+msg)
            return false
        }
    }

    //FUNÇÃO PARA INSERIR DADOS DO VETOR NA TABELA
    listaTabela(){
        let tbody = document.getElementById('tbody')
        for(let i = 0; i < this.arrayEquipamentos.length; i++){
            let tr = tbody.insertRow()
            let td_id = tr.insertCell()
            let td_nome = tr.insertCell()
            let td_categoria = tr.insertCell()
            let td_data = tr.insertCell()
            let td_acoes = tr.insertCell()

            td_id.innerText = this.arrayEquipamentos[i].id
            td_nome.innerText = this.arrayEquipamentos[i].nome
            td_categoria.innerText = this.arrayEquipamentos[i].categoria
            td_data.innerText = this.arrayEquipamentos[i].data

            let imgEditar = document.createElement('img')
            imgEditar.src = 'img/editar-texto.png'
            td_acoes.appendChild(imgEditar)
            let imgExcluir = document.createElement('img')
            imgExcluir.src = 'img/deletar-lixeira.png'
            td_acoes.appendChild(imgExcluir)
        }
    }

    cancelar(){
        document.getElementById('inputNome').value = ''
        document.getElementById('inputCategoria').value = ''
        document.getElementById('inputData').value = ''
    }

}

let equipamento = new Equipamento()
