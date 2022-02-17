'use strict';
const btnCadastroFuncionario = document.querySelector('div#btnCadastroFuncionario');
const btnCadastroUsuario = document.querySelector('div#btnCadastroUsuario');
const btnCloseModalUser = document.querySelector('.close-modal-user');
const btnsOpenModalUser = document.querySelectorAll('.show-modal-user');
const btnCloseModalFunc = document.querySelector('.close-modal-func');
const btnsOpenModalFunc = document.querySelectorAll('.show-modal-func');
const modalUser = document.querySelector('.modal-user');
const modalFunc = document.querySelector('.modal-func');
const overlay = document.querySelector('.overlay');

// FECHANDO AS JANELAS DE CADASTRO
const closeModalFunc = function() {
    modalFunc.classList.add('hidden');
    overlay.classList.add('hidden');
};
const closeModal = function() {
    modalUser.classList.add('hidden');
    overlay.classList.add('hidden');
};

const cadastrarFuncionarios = function(){
    const openModalFunc = function() {
        modalFunc.classList.remove('hidden');
        overlay.classList.remove('hidden');
    };
    
    for(let i = 0; i < btnsOpenModalFunc.length; i++)
        btnsOpenModalFunc[i].addEventListener('click', openModalFunc);

    btnCloseModalFunc.addEventListener('click', closeModalFunc);
    overlay.addEventListener('click', closeModalFunc);

    document.addEventListener('keydown', function(e) {
        if(e.key === 'Escape' && !modalFunc.classList.contains('hidden')){
            closeModalFunc();
        }
    });
}
const cadastrarUsuarios = function(){
    const openModal = function() {
        modalUser.classList.remove('hidden');
        overlay.classList.remove('hidden');
    };

    for(let i = 0; i < btnsOpenModalUser.length; i++)
        btnsOpenModalUser[i].addEventListener('click', openModal);

    btnCloseModalUser.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);

    document.addEventListener('keydown', function(e) {
        if(e.key === 'Escape' && !modalUser.classList.contains('hidden')){
            closeModal();
        }
    });
}
function sair (){
    if(window.confirm("Deseja sair ?")){
        window.location.href = "login.html"
    }
}