// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");


function testeTexto(event){
  event.preventDefault();
}


function testeCheckbox(event) {
  event.preventDefault();
}

function testePrevent(event) {
  event.preventDefault();
}

//Events
INPUT_CHECKBOX.addEventListener("click", testeCheckbox);

HREF_LINK.addEventListener("click", testePrevent);

INPUT_TEXT.addEventListener('keypress', testeTexto)