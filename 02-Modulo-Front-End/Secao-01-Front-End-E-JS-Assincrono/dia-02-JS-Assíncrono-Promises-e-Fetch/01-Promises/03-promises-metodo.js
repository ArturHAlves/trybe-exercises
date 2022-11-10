const genaratorRandomNumber = () => Math.round(Math.random() * 10);

const promiseResolve = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = genaratorRandomNumber();
      resolve(randomNumber);
    }, 1000);
  });

const promiseReject = () => 
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = genaratorRandomNumber();
      reject(new Error("Deu ruim"));
    }, 1000);
  });

promiseResolve()
  .then((resolve) => {
    console.log(`O promiseResolve: o numero random é ${resolve}`);
  })
  .catch((error) => {
    console.log("Deu ruim");
  });

promiseReject()
  .then((resolve) => {
    console.log("Não vai passar nada");
  })
  .catch((erro) => {
    console.log(`Deu ruim aqui ${erro.message}`);
  });
