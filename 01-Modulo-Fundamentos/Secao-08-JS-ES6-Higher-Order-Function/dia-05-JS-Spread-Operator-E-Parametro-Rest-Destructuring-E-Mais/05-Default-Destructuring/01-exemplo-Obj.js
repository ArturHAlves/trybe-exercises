const person = {
  name: 'João',
  lastName: 'Jr',
  age: 34,
};

const { nationality = 'Brazilian' } = person;
console.log(nationality); // Brazilian




//Spread 

const novaArray = {
  ...person,
  nacionalidade: 'Brazilian'
}

console.log(novaArray);