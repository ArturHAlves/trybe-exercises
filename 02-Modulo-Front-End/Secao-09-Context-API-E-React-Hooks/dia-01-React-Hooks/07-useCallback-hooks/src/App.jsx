import { useState, useCallback } from 'react';

function App() {
  const [count, setCount] = useState(0);

  // Define uma função incremenetCount usando useCallback
  const incrementCount = useCallback(() => {
    console.log('Chamando a função');
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={incrementCount}>Incrementar</button>
    </div>
  );
}

export default App;
