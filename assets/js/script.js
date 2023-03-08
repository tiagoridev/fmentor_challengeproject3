const notes = document.querySelectorAll('.list-item');
const lista =document.querySelector('#container-thanks')
const btn = document.querySelector('#container-btn')
const finalNote = document.querySelector('#finalNote')
let selectedNote;

notes.forEach(note => {
    note.addEventListener('click', () => { 
        console.log(`${note.textContent}`);    
})
})





// let notes = document.querySelectorAll('.list-item');
// const btn = document.querySelector('#container-btn');
// const finalNote = document.querySelector('#finalNote');

// let selectedNote = '';

// notes.forEach((note) => {
//   note.addEventListener('click', () => {
//     selectedNote = note.textContent;
//     console.log(`Botao selecionado: ${selectedNote}`);
//   });
// });

// btn.addEventListener('click', () => {
//   if (selectedNote === '') {
//     alert('Por favor, selecione um número');
//   } else {
//     window.location.href = 'thank.html';
//     finalNote.textContent = '5874';
//   }
// });



 // infNote.innerHTML = 'TESTE';


// notes.forEach((note) => {
//     note.addEventListener('click', ()=> {   
//     // const noteA = note.innerText    
//     console.log(`Botao selecionado: ${note.textContent}`);  
// })  

// btn.addEventListener('click', ()=> {   
//     window.location.href = 'thank.html';    
// })

// })


// function submit() {
//     if (notes.length === 0){
//         alert('Select a number')
//     } else {
//         const win = window.open(url)
//         win.focus()
//     }

//     btn.addEventListener('click', submit)
// }




 






