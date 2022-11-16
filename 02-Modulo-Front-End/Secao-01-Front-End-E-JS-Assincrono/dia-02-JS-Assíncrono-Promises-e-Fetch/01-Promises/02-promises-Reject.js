const genaratorRandomNumber = () => Math.round(Math.random() * 10);

const promiseReject = () => 
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = genaratorRandomNumber();
      resolve(randomNumber);
    });
  }, 1000);


console.log(promiseReject());

// Repare que podemos retornar qualquer valor usando a função reject, mas geralmente é uma boa prática retornar um objeto de erro.
