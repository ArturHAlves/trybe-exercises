// // Agora, vamos refatorar o código para remover o Type Assertion e utilizar Type Annotation. Veja como fica:

// type User2 = {
//   id: number,
//   name: string,
//   address: string,
//   addressNumber: number,
// };

// const UserDB2 = {
//   findById: (userId: number): unknown => ({
//     id: userId,
//     name: 'Silvana',
//   }),
// };

// function getUser2(userId: number): User {
//   const user = UserDB.findById(userId);
//   const userWithAddress: User = {
//     // Error: Property 'addressNumber' is missing in type '{ address: string; id: number; name: string; }' but required in type 'User'.
//     ...user,
//     address: 'Rua São Camilo',
//     addressNumber: 111,
//   };
//   return userWithAddress;
// }
