const btn = document.querySelector('#btn');
const texto = document.querySelector('#text')

let clickCount = 0;



  btn.addEventListener('click', () =>{
    texto.innerHTML = clickCount += 1
  })