// Adicione a tag h1 com o texto Exercício - JavaScript DOM como filho da tag body;

let body = document.querySelector("body");

let criandoH1 = document.createElement("h1");
criandoH1.innerText = "Exercício";

body.appendChild(criandoH1);

// Adicione a tag main com a classe main-content como filho da tag body;

let tagMain = document.createElement("main");
tagMain.className = "main-content";

body.appendChild(tagMain);

// Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;

let tagSection = document.createElement("section");
tagSection.className = "center-content";

tagMain.appendChild(tagSection);

// Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;

let filhoUmTagSection = document.createElement("p");
filhoUmTagSection.innerText = "Contéudo sobre DOM";

tagSection.appendChild(filhoUmTagSection);

// Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;

let segundoFilhoMain = document.createElement("section");
segundoFilhoMain.className = "left-content";

tagMain.appendChild(segundoFilhoMain);

// Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;

let terceiroFilhoMain = document.createElement("section");
terceiroFilhoMain.className = "right-content";

tagMain.appendChild(terceiroFilhoMain);

// Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;

let imgFilhoDoSegundoFilhoMain = document.createElement("img");
imgFilhoDoSegundoFilhoMain.className = "small-image";
imgFilhoDoSegundoFilhoMain.src = "https://picsum.photos/200";

segundoFilhoMain.appendChild(imgFilhoDoSegundoFilhoMain);

// Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, … como valores da lista. Essa lista deve ser filha do section criado no passo 6;

let elementUl = document.createElement("ul");
terceiroFilhoMain.appendChild(elementUl);

let lista = [
  "Um",
  "Dois",
  "Três",
  "Quatro",
  "Cinco",
  "Seis",
  "Sete",
  "Oito",
  "Nove",
  "Dez",
];

for (let index in lista) {
  let elementLi = document.createElement("li");
  elementLi.innerText = lista[index];
  elementUl.appendChild(elementLi);
}

// Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.

document.querySelector("main");

for (let index = 0; index < 3; index += 1) {
  let adicionandoh3 = document.createElement("h3");
  adicionandoh3.innerText = index;
  tagMain.appendChild(adicionandoh3);
}

// Adicione a classe title na tag h1 criada;

let title = document.querySelector("h1");
// console.log(title);
title.className = "title";

// Adicione a classe description nas 3 tags h3 criadas;

let colocandoClasseH3 = document.querySelectorAll('h3');

for(let index =0; index < 3; index += 1){
  colocandoClasseH3[index].className = 'description'
}

// Remova a section criado no passo 5 (aquele que possui a classe left-content). Utilize a função .removeChild();

let removeFilhoSection = document.querySelector('.left-content');

 tagMain.removeChild(removeFilhoSection);


//  Centralize a section criado no passo 6 (aquele que possui a classe right-content). Dica: para centralizar, basta configurar o margin-right: auto da section;

let centralizarSection = document.querySelector('.right-content');

centralizarSection.style.marginRight = 'auto'
centralizarSection.style.backgroundColor = 'aqua'


// Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content) para a cor verde;

let trocarFundo = document.querySelector('.center-content')

trocarFundo.parentElement.style.backgroundColor = 'green'

console.log(trocarFundo);

// Remova os dois últimos elementos (nove e dez) da lista criada no passo 8.

let remover = document.querySelector('ul');

remover.lastChild.remove();
remover.lastChild.remove();


