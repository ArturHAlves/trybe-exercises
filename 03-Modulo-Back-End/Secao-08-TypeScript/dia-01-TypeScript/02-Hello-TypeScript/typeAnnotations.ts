// Variáveis 
const firstName: string = 'Artur'
const age: number = 22
const Brazilian: boolean = true;

// Funções 
// Definindo o tipo de entrada do parâmetro
function greet(name: string) {
  console.log(`Olá, ${name.toUpperCase()}!`);
}

// Definindo o tipo do retorno 
function getFavoriteNumber(): number {
  return 26;
}

// Quando a função não tem retorno: void

function greet2(name: string): void {
  console.log(`Olá, ${name.toUpperCase()}!`);
}


// Object Type 
function printPersonalInfo(data: { name: string; birthYear: number }) {
  console.log(`${data.name} was born in ${data.birthYear}.`);
}
printPersonalInfo({ name: 'Rogerinho', birthYear: 1978 });


// Criando variáveis de objeto 
const evenNumbers: number[] = [2, 4, 6];
const vowel: string[] = ['a', 'e', 'i', 'o', 'u'];
const booleanValues: boolean[] = [true, false];


