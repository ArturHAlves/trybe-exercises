import context from './Context/myContext';
import { useContext } from 'react';

function App() {
  const { state, setState } = useContext(context);

  const handleChange = ({ target }) => {
    setState({ ...state, toDo: target.value });
  };

  const saveTask = () => {
    setState({ ...state, toDoList: [...state.toDoList, state.toDo] });
  };

  console.log(state);

  return (
    <div>
      <h1>TO DO LIST</h1>
      <input
        type="text"
        placeholder="Digite sua tarefa"
        onChange={handleChange}
      />
      <button onClick={saveTask}>Salvar</button>

      {state.toDoList.map((task, index) => (
        <p key={index}>{task}</p>
      ))}
    </div>
  );
}

export default App;
