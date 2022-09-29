let elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta')
// console.log(elementoOndeVoceEsta);

let pai = elementoOndeVoceEsta.parentElement.style.color = "green"
// console.log(pai);

let primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild;
primeiroFilhoDoFilho.innerText = "Eu sou primeiroFilhoDoFilho";

let primeiroFilho = pai.firstElementChild

let primeiroFilho2 = primeiroFilho.firstElementChild;

let atencao = elementoOndeVoceEsta.nextSibling  //Acessa o proximo nó (No caso Atenção) e está fora da section

let terceiroFilho = elementoOndeVoceEsta.nextElementSibling // Está acessando outra section fechando 

let pai2 = terceiroFilho.lastElementChild.previousElementSibling // Basicamente o pega a ultima section e depois para o proximo elemento. Indo para o pai