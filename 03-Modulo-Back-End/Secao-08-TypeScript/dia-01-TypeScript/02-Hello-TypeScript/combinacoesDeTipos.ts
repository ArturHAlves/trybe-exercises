// Union Types 

function printId (id: string | number) {
  console.log(`Your ID is: ${id}`);
}

printId('1');
printId(1);


// Type Aliases

type PersonalInfo = {
  name: string,
  birthYear: number
};

function printPersonalInfo2(data: PersonalInfo) {
  console.log(`${data.name} was born in ${data.birthYear}.`);
}

printPersonalInfo({ name: 'Rogerinho', birthYear: 1978});


// Type Aliases e Union Types 

// type PersonalInfo = {
//   name: string;
//   birthYear: number | string;
// };

// OUTRO EXEMPLO: 
// type ID = number | string;