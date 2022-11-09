const currentHour = 5;

let message; 

if (currentHour >= 22) {
   message = "Não deveríamos comer nada, é hora de domrir";
}

else if (currentHour >= 18 && currentHour < 22) {
  message = "Rango da noite, vamos jantar";
}

else if (currentHour >= 14 && currentHour < 18) {
  message = "Vamos fazer um bolo pro café da tarde"
}

else if (currentHour >= 11 && currentHour <= 14) {
  message = "Hora do Almoço!"
}

else if (currentHour >= 4 && currentHour <= 11) {
  message = "Hmm, cheiro de café recém-passado"
}

else{
  message = "Estou dormindo"
}

console.log(message);