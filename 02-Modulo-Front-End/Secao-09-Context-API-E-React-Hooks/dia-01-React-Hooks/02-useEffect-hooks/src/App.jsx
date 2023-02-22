import { useEffect, useState } from 'react';

let intervalIdState = 0;

function App() {
  const [name, setName] = useState('');
  const [countDown, setCountDown] = useState(10);

  // useEffect(() => {
  //   console.log('Qualquer alteração de estado, vai renderizar');
  //   document.title = `Seu nome: ${name}`
  // });

  useEffect(() => {
    document.title = `Seu nome: ${name}`;
    console.log('Vai atualizar somente o input name');
  }, [name]);

  useEffect(() => {
    console.log('Vai renderizar somente "UMA VEZ" ');
    document.title = `Seu nome: ${name}`;
  }, []);


  // Criar um contador que começa com 10 e termina com 0
  useEffect(() => {
    intervalIdState = setInterval(() => {
      setCountDown((prevState) => prevState - 1);
    }, 1000);
  }, []);

  useEffect(() => {
    if (countDown <= 0) {
      clearInterval(intervalIdState);
    }
  }, [countDown]);

  return (
    <div>
      <h1>Atenção, faltam {countDown} segundos</h1>
      <input
        type="text"
        value={name}
        onChange={({ target }) => setName(target.value)}
      />
    </div>
  );
}

export default App;
