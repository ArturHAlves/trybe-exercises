const readline = require('readline-sync')

const name = readline.question('Qual o seu nome?');
const age = readline.questionInt('Qual sua idade?');
const email = readline.questionEMail('Seu email?');

console.log
(`Olá, ${name}. Obrigado por fornecer sua idade: ${age} e seu emaiL: ${email} ` );

