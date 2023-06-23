type User = {
  id: number,
  name: string,
  address: string,
  addressNumber: number,
};

const UserDB = {
  findById: (userId: number): unknown => ({
    id: userId,
    name: 'Silvana',
  }),
};

function getUser(userId: number): User {
  const user = UserDB.findById(userId) as User;
  user.address = 'Rua São Camilo';
  user.addressNumber = 51 
  return user; 
}

const user = getUser(1);
console.log(user);

// Agora, vamos refatorar o código para remover o Type Assertion e utilizar Type Annotation. Veja como fica: