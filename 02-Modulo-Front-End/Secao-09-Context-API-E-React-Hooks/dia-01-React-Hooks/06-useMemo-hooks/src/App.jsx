import { useState, useMemo } from 'react';

function App() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);

  // Calcula a soma de value1 e value2, memorizando o resultado com UseNemo
  const sum = useMemo(() => {
    console.log('calculando a soma...');
    return value1 + value2;
  }, [value1, value2]);

  return (
    <div>
      <p>Value 1: {value1}</p>
      <p>Value 2: {value2}</p>
      <h1>Soma: {sum}</h1>
      <button onClick={() => setValue1((prev) => prev + 1)}>
        Incrementar Value 1
      </button>
      <button onClick={() => setValue2((prev) => prev + 1)}>
        Incrementar Value 2
      </button>
    </div>
  );
}

export default App;
