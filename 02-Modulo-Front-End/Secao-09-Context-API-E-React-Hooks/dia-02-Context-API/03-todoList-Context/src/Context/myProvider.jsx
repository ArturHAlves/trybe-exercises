import { useState } from 'react';
import context from './myContext';

function Provider({ children }) {
  const [state, setState] = useState({
    toDo: '',
    toDoList: [],
  });

  const contextValue = {
    state,
    setState,
  };
  return <context.Provider value={contextValue}>{children}</context.Provider>;
}

export default Provider;
