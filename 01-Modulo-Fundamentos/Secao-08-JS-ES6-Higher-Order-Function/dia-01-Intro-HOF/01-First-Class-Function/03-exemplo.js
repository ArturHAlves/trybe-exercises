//Passar funções como argumento para outras funções:


const sayHello = () => {
  return ('hello trybers');
}

const printGreeting = (callback) => {
    console.log(callback());
}

printGreeting(sayHello);