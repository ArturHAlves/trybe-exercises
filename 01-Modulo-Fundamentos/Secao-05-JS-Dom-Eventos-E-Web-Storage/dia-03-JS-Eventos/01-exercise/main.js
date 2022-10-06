const firstLi = document.getElementById("first-li");
const secondLi = document.getElementById("second-li");
const thirdLi = document.getElementById("third-li");
const input = document.getElementById("input");
const myWebpage = document.getElementById("my-spotrybefy");

// - Copie esse arquivo e edite apenas ele;
//  - Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

//Resposta = Ocorre pois o primeiro elemento contém uma classe que faz alterações.

// - Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
//  - Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

function adicionaClasse(event) {
  const elementoClass = document.querySelector(".tech");
  elementoClass.classList.remove("tech");
  event.target.classList.add("tech");
  // console.log(event.target);
}

firstLi.addEventListener("click", adicionaClasse);
secondLi.addEventListener("click", adicionaClasse);
thirdLi.addEventListener("click", adicionaClasse);

// - Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
input.addEventListener("input", alterarTexto);

function alterarTexto(event) {
  const alterar = document.querySelector(".tech");
  alterar.innerText = event.target.value;
}

// - Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
//  - Que tal redirecionar para seu portfólio?
myWebpage.addEventListener("dblclick", redirecionarPagina);

function redirecionarPagina() {
  window.location.href = "https://github.com/ArturHAlves";
}

// - Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

myWebpage.addEventListener("mouseover", mudarCor);

myWebpage.addEventListener("mouseout", voltarCor);

function mudarCor(event) {
  event.target.style.color = "grey";
}

function voltarCor(event) {
  event.target.style.color = "white";
}

// Segue abaixo um exemplo do uso de event.target:

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = "Opção reiniciada";
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener("dblclick", resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.
