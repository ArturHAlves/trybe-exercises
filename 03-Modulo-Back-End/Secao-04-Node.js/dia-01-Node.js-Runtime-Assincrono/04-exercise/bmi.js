const readline = require('readline-sync');


function calculadoraIMC (peso, altura) {
  console.log(`Peso: ${peso}, Altura: ${altura} `);

  const alturaEmMetros = altura / 100; 
  const alturaAoQuadrado = alturaEmMetros ** 2; 

  const imc = (peso / alturaAoQuadrado); 

  return imc

};

function main () {
  const PESO_KG = readline.questionFloat('Qual seu peso? (KG)');
  const ALTURA_CM = readline.questionInt('Qual sua altura? (CM)');

  const imc = calculadoraIMC(PESO_KG, ALTURA_CM);

  if (imc < 18.5) {
    console.log('Abaixo do peso (magreza)');

  } else if (imc >= 18.5 && imc <= 24.9) {
    console.log('Peso normal');

  } else if ( imc >= 25.0 && imc <= 29.9  ) {
    console.log('Acima do peso (sobrepeso');  
  } else if ( imc >= 30.0 && imc <= 34.9 ) {
    console.log('Obesidade grau I');
  } else {
    console.log('Obesidade graus III e Iv');
  }

}

main();