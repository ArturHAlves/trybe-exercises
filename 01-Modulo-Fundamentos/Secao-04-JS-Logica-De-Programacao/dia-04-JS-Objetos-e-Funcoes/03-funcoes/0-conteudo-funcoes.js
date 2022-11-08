// Funções são a forma mais essencial de organização de código e de lógica na programação; usando-as, você consegue dividir seu código em blocos lógicos e deixar as coisas mais organizadas.

// Com isso, é possível diminuir o tamanho do seu código, acabar com a repetição e tornar mais fáceis a leitura e o entendimento, pois a lógica do programa estará muito bem dividida.



// é possível criar funções que recebem ou não parâmetros. E, para decidir se a sua função precisa ou não deles, você deve pensar em sua lógica.

// Por exemplo, se a função tiver o objetivo de cumprimentar a pessoa que está executando o programa pelo nome, tal como: “Bom dia, João!”, ela vai precisar receber o nome da pessoa como parâmetro. Porém, se ela foi desenvolvida apenas para dar “Bom dia!”, um parâmetro não é necessário.


// EXEMPLO

// Sem função
// let nome = 'João';

// console.log('Bom dia, ' + nome);


// // Com função
// function bomDiaTryber(nome) {
//   console.log('Bom dia, ' + nome);
// }

// bomDiaTryber('João'); // Bom dia, João
// bomDiaTryber('Artur'); // Bom dia, Artur
// bomDiaTryber('Artur Henrique '); // Bom dia, Artur Henrique 


// Com base nesse exemplo, se você optasse por não usar função e precisasse dar bom dia para pessoas diferentes várias vezes durante o código, teria que estar sempre mudando o valor da variável nome e sempre escrevendo a mesma mensagem, o que pode acabar gerando erros de digitação e causar erros na sua aplicação.





// EXEMPLO SEM PARÂMETROS 

// function bomDia() {
//   return 'Bom dia!';
// }

// console.log(bomDia()); // Bom dia!


// EXEMPLO SEM PARÂMETROS 
// let status = 'deslogado';

// function logarDeslogar() {
//   if (status === 'deslogado') {
//     status = 'logado';
//   } else {
//     status = 'deslogado';
//   }
// }

// console.log(status); // deslogado

// logarDeslogar();
// console.log(status); // logado

// logarDeslogar();
// console.log(status); // deslogado

// console.log('O usuário está ' + status); // O usuário está deslogado



// EXEMPLOS COM PARÂMETROS 

// Com função
// function soma(a, b) {
//   return a + b;
// }

// console.log(soma(7, 2)); // 9



// EXEMPLO COM PARÂMETROS

// function maiorNum(primeiroNum, segundoNum) {
//   if (primeiroNum > segundoNum) {
//     return primeiroNum + ' é maior que ' + segundoNum;
//   } else if (segundoNum > primeiroNum) {
//     return segundoNum + ' é maior que ' + primeiroNum;
//   } else {
//     return 'Os números são iguais';
//   }
// }

// console.log(maiorNum(10, 20)); // 20 é maior que 10
// console.log(maiorNum(2, -5)); // 2 é maior que -5
// console.log(maiorNum(1, 1)); // Os números são iguais


// Ah, se lembra da complexidade de código? Surpresa! É comum esse erro aparecer enquanto você escreve suas primeiras funções, não se assuste! O que você precisa fazer é quebrá-las em partes menores ou até mesmo criar subfunções que podem ser chamadas dentro dessas funções.

// Essa tarefa fica mais fácil quando você entende que cada função deve ter apenas um propósito. Evite criar uma função que faça várias coisas diferentes e que não tenham ligação uma com a outra! Não é recomendável que uma função tenha muitas finalidades, como dizer “oi”, multiplicar dois números e dizer qual é a estação do ano. É melhor você dividir isso tudo em 3 funções diferentes, pois, além de diminuir a complexidade, fica melhor para entender e usá-las em outras partes do código.

