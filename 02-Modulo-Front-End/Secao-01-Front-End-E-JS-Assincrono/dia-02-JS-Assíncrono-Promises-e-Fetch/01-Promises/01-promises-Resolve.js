// Função que gera um número aleatório
const genaratorRandomNumber = () => Math.round(Math.random() * 10);

// Primise resolvida retornando o número aleatório
const resolvePromises = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = genaratorRandomNumber();
      resolve(randomNumber);
    }, 1000);
  });

console.log(resolvePromises());

// Dessa forma, quando a promise resolvedPromise for chamada, ela será finalizada com o estado de resolvida, retornando o número gerado