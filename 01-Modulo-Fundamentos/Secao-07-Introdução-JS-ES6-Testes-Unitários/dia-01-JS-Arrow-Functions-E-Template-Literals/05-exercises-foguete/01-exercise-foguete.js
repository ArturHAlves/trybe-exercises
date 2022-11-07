// Altere o tipo das variáveis(var) para let ou const para que respeitem o escopo em que foram declaradas, e altere a função utilizando arrow function e template literals.

// Modifique as variáveis para que respeitem o escopo onde estão declaradas;
// Modifique a estrutura da função para que ela seja uma arrow function;
// Modifique as concatenações para template literals.

// function testingScope(escopo) {
//   if (escopo === true) {
//     let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//     console.log(ifScope);
//   } else {
//     const elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
//     console.log(elseScope);
//   }
// }

// testingScope(true);

let ifScope;
let elseScope;

const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = "Não devo ser utilizada fora do meu escopo (if)";
    ifScope = `${ifScope} ótimo, fui utilizado no escopo !`;
    console.log(ifScope);
  } else {
    const elseScope = "Não devo ser utilizada fora do meu escopo (else)";
    console.log(`${elseScope}`);
  }
};

testingScope(false);
