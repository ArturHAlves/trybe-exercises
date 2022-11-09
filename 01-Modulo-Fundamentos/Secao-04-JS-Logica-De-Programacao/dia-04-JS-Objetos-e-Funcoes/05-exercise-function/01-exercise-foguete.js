// Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

// Exemplo de palíndromo: arara

// verificaPalindrome('arara')

// Retorno esperado: true
// verificaPalindrome('desenvolvimento')

// Retorno esperado: false

function verificaPalindrome(palavra){
  let reverse = palavra.split('').reverse().join('');
  if (reverse === palavra) {
    console.log(true);
  }
  else{
    console.log(false);
  }
}

verificaPalindrome('baco')  