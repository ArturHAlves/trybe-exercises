// Utilize if/else para fazer um programa que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A

// Porcentagem >= 80 -> B

// Porcentagem >= 70 -> C

// Porcentagem >= 60 -> D

// Porcentagem >= 50 -> E

// Porcentagem < 50 -> F

// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

let nota = 55.2;

if (nota >= 90 && nota <= 100) {
  console.log("Você tirou: A");
} else if (nota >= 80 && nota < 90) {
  console.log("você tirou: B");
} else if (nota >= 70 && nota < 80) {
  console.log("Você tirou: C");
} else if (nota >= 60 && nota < 70) {
  console.log("Você tirou: D");
} else if (nota >= 50 && nota < 60) {
  console.log("você tirou: E");
} else if (nota < 50) {
  console.log("Você tirou: F");
} else {
  console.log("erro");
}
