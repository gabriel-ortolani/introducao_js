// const aperto = () =>{
//     window.alert("deu certo");
//     console.log("deu certo");
// }

let lista = document.querySelectorAll('.item');
let next = document.getElementById('depois');
let prev = document.getElementById('antes');
let contar = lista.length;
let ativo = 0;

// Eu fiz
// next.onclick = () =>{
//     let desativar = document.querySelector('.ativo')
//     desativar.classList.remove('ativo')
//     if(ativo == 2){
//         ativo = ativo - 2
//     }else{
//         ativo = ativo + 1
//     }
//     lista[ativo].classList.add('ativo')
// }
// prev.onclick = () =>{
//     let desativar = document.querySelector('.ativo')
//     desativar.classList.remove('ativo')
//     if(ativo == 0){
//         ativo = ativo + 2
//     }else{
//         ativo = ativo - 1
//     }
//     lista[ativo].classList.add('ativo')
// }

// Raul fez
next.onclick = () =>{
    let desativar = document.querySelector('.ativo')
    desativar.classList.remove('ativo')
    if(ativo >= contar -1){
        ativo=0;
    }else{
        ativo = ativo + 1
    }
    lista[ativo].classList.add('ativo')
}
prev.onclick = () =>{
    let desativar = document.querySelector('.ativo')
    desativar.classList.remove('ativo')
    if(ativo <= 0){
        ativo = ativo + 2
    }else{
        ativo = ativo - 1
    }
    lista[ativo].classList.add('ativo')
}