import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>Contador: {counter} </h1>
      <button onClick={() => setCounter((prevState) => prevState + 1)}>
        Incrementar
      </button>
    </div>
  );
}

export default App;
