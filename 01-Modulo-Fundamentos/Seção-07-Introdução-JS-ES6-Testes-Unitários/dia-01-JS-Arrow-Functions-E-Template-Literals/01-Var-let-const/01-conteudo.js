// function userInfo() {
//   let userEmail = 'maria@email.com';

//   // Toda expressão dentro do escopo da função userInfo tem acesso à variável userEmail
//   console.log(userEmail);
// }
// userInfo();

// function userInfo() {
//   const userEmail = 'maria@email.com';

//   // Toda expressão dentro do escopo da função userInfo tem acesso à variável userEmail
//   console.log(userEmail);
// }
// userInfo();

function userInfo() {
  var userEmail = 'maria@email.com';

  // Toda expressão dentro do escopo da função userInfo tem acesso à variável userEmail
  console.log(userEmail);
}
userInfo();



// Tente rodar a função userInfo no seu editor de código. Nesse caso, a variável userEmail foi declarada dentro do escopo da função userInfo. Agora experimente mover o console.log(userEmail) para fora da função e a execute novamente. Você verá um erro dizendo que userEmail não é definida - a variável só é reconhecida dentro do escopo da função.