let mudarFundo = document.getElementsByTagName("body")[0];
mudarFundo.style.background = "rgb(219, 216, 216)"

//TITULO
let tituloPrincipal = document.getElementById("header-container"); 

tituloPrincipal.style.background = "green";

// tarefas urgentes 
let tarefasUrgentes = document.getElementsByClassName("emergency-tasks")[0];

tarefasUrgentes.style.background = "#e5989b"

let fundoTarefas = document.getElementsByTagName("h3")[0].style.background = "purple"

let fundoTarefas2 = document.getElementsByTagName("h3")[1].style.background = "purple"


//tarefas não urgentes 
let tarefasNaoUrgentes = document.getElementsByClassName("no-emergency-tasks")[0];

tarefasNaoUrgentes.style.background = "yellow";

let fundoNaoTarefas = document.getElementsByTagName("h3")[2];

fundoNaoTarefas.style.background = "black";

let fundoNaoTarefas2 = document.getElementsByTagName("h3")[3];

fundoNaoTarefas2.style.background = "black"

//footer 

let fundoFooter = document.getElementsByTagName("footer")[0]; 

fundoFooter.style.background = "green";
fundoFooter.style.display = "block"
fundoFooter.style.marginTop = "108px"

