import { useContext } from 'react';
import { CostumerContext } from '../Context/CostumContext';

function Hello() {
  const { name } = useContext(CostumerContext);

  return (
    <div>
      <h1>Olá Pessoa {name}</h1>
    </div>
  );
}

export default Hello;
