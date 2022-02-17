class Equipamento{

    constructor(){
        this.id = 1
        this.arrayEquipamentos = [
            {
                nome: "Notebook",
                categoria: "Eletrônico",
                data: "01-01-2018",
                id: this.id++
            },
            {
                nome: "CABO HDMI",
                categoria: "Eletrônico",
                data: "01-05-2019",
                id: this.id++
            },
            {
                nome: "Projetor",
                categoria: "Eletrônico",
                data: "05-08-2020",
                id: this.id++
            }
        ]
        this.id_atualizar = null
    }

    //INICIO DA FUNÇÃO SALVAR DA TELA INICIAL DO FUNCIONÁRIO
    salvar(){
        let equipamento = {}
        equipamento = this.lerDados()
        if(this.validaCampo(equipamento)){
            if(this.id_atualizar == null){
                this.adicionar(equipamento)
            }else{
                this.atualizar(this.id_atualizar, equipamento)
            }
        }
        this.listaTabela()
        this.cancelar()
    }

    //FUNÇÃO CANCELAR DO FORMULÁRIO DE CRIAÇÃO E EDIÇÃO DE EQUIPAMENTOS
    cancelar() {
        document.getElementById('inputNome').value = ''
        document.getElementById('inputCategoria').value = ''
        document.getElementById('inputData').value = ''
        document.getElementById('inputID').value = ''

        document.getElementById('salvar').innerText = 'Salvar'
        document.getElementById('tituloFormFun').innerText = 'Cadastrar Novo Equipamento'

        this.id_atualizar = null
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
        tbody.innerText = ''

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

            //BOTÃO EDITAR
            let imgEditar = document.createElement('img')
            imgEditar.src = 'img/editar-texto.png'
            td_acoes.appendChild(imgEditar)
            imgEditar.setAttribute('onclick', 'equipamento.editar('+ JSON.stringify(this.arrayEquipamentos[i]) +')')

            //BOTÃO EXCLUIR
            let imgExcluir = document.createElement('img')
            imgExcluir.src = 'img/deletar-lixeira.png'
            td_acoes.appendChild(imgExcluir)
            imgExcluir.setAttribute('onclick', 'equipamento.deletar('+ this.arrayEquipamentos[i].id +')')
        }
    }

    //BOTÃO DELETAR LINHA NA TABELA DE EQUIPAMENTOS
    deletar(id) {
        let tbody = document.getElementById('tbody')
        if (confirm("Deseja excluir o equipamento ID: " + id)) {
            for (let i = 0; i < this.arrayEquipamentos.length; i++) {
                if (this.arrayEquipamentos[i].id == id) {
                    this.arrayEquipamentos.splice('i', '1')
                    tbody.deleteRow(i)
                }
            }
        }

    }

    //BOTÃO EDITAR EQUIPAMENTOS DA TABELA
    editar(dados_equipamentos){
        this.id_atualizar = dados_equipamentos.id

        document.getElementById('inputNome').value = dados_equipamentos.nome
        document.getElementById('inputCategoria').value = dados_equipamentos.categoria
        document.getElementById('inputData').value = dados_equipamentos.data
        document.getElementById('inputID').value = dados_equipamentos.id

        document.getElementById('salvar').innerText = 'Atualizar'
        document.getElementById('tituloFormFun').innerText = 'Editar Equipamento'

    }

    //METODO ATUALIZAR
    atualizar(id, equipamento){
        for(let i = 0; i < this.arrayEquipamentos.length; i++){
            if(this.arrayEquipamentos[i].id == id){
                this.arrayEquipamentos[i].nome = equipamento.nome
                this.arrayEquipamentos[i].categoria = equipamento.categoria
                this.arrayEquipamentos[i].data = equipamento.data
            }
        }
    }

    sair() {
        if (window.confirm("Deseja sair ?")) {
            window.location.href = "login.html"
        }
    }

}

let equipamento = new Equipamento()
