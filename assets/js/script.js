let list = document.querySelector('#container-text');

function clicar(){
    list.classList.toggle('activo');
}

list.addEventListener('click', clicar);