import { useState, createContext } from 'react';

export const CostumerContext = createContext();

export const CostumerProvider = ({ children }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const submit = ({ name, email }) => {
    setName(name);
    setEmail(email);
  };

  return (
    <CostumerContext.Provider value={{ name, email, submit }}>
      {children}
    </CostumerContext.Provider>
  );
};
