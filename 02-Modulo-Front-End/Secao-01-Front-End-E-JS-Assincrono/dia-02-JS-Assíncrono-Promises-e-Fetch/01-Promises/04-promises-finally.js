const generatorRandomNumber = () => Math.round(Math.random() * 10);

const resolvePromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const random = generatorRandomNumber();
      resolve(random);
    }, 1000);
  });

resolvePromise()
  .then((resolve) => {
    console.log(`O numero sorteado foi ${resolve}`);
  })
  .catch((erro) => {
    console.log(`Com a promise resolvida, não irá passar pelo catch`);
  })
  .finally(() => {
    console.log(`Fim da execução da primeira promise.`);
  });

  // código que não é assíncrono.
// Será executado antes do retorno da resolvedPromise
// mesmo estando após ela no código
console.log(
  `Esse número não foi gerado por um código assíncrono: ${generatorRandomNumber()}`
);
