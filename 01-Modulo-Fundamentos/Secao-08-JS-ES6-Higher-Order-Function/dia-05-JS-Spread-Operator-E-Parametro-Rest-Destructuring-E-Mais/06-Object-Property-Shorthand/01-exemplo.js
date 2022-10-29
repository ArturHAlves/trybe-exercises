//ANTIGAMENTE 

const antigamenteUser = (id, name, email) => {
  return {
    id: id,
    name: name,
    email: email,
  };
};

console.log(antigamenteUser(54, 'isabella', 'isabella@email.com')); // { id: 54, name: 'isabella', email: 'isabella@email.com' }


//AGORA AGORA COM OBJECT PROPERTY SHORTHAND

const newUser = (id, name, email) => {
  return {
    id,
    name,
    email,
  };
};

console.log(newUser(54, 'isabella', 'isabella@email.com')); // { id: 54, name: 'isabella', email: 'isabella@email.com' }
