// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

// Array de teste: [2, 3, 2, 5, 8, 2, 3];.

// Valor esperado no retorno da função: 2.

function repeteQuantaVezes(array) {
  let contRepetido = 0;
  let contNumero = 0;
  let indexNumeroRepetido = 0;

  for (let index in array) {
    let verificaNumero = array[index];
    for (let index2 in array) {
      if (verificaNumero === array[index2]) {
        contNumero += 1;
      }
    }
    if (contNumero > contRepetido) {
    contRepetido = contNumero;
    indexNumeroRepetido = index
    }
    contNumero = 0;
  }
  console.log(array[indexNumeroRepetido]);
}

repeteQuantaVezes([2, 3, 2, 5, 8, 2, 3]);
