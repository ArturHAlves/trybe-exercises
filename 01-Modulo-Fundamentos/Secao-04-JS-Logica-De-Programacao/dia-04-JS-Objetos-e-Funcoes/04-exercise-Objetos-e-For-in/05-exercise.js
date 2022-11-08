// Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: ‘Tio Patinhas’, ‘Christmas on Bear Mountain, Dell’s Four Color Comics #178’, ‘O último MacPatinhas’, ‘Sim’. Então, imprima os valores de cada objeto juntos, de acordo com cada uma das chaves. Valor esperado no console:

let informacoes = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  recorrente: "Sim",
};

let novasInformacoes = {
  personagem: " e Tio Patinhas",
  origem: " e Christimas on Bear Moutain, Dell's FOur Color Comics",
  nota: " O último MacPatinhas",
  recorrente: ""
}

for(let key in informacoes){
  console.log(informacoes[key] + novasInformacoes[key])
}