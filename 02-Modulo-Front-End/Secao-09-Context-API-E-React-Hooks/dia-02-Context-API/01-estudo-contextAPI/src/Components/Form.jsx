import { useState, useContext } from 'react';
import { CostumerContext } from '../Context/CostumContext';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const { submit } = useContext(CostumerContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    setName(name);
    setEmail(email);

    submit({ name, email });

    console.log(`Dados component: ${name}, ${email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Formulário</h1>
      <label>
        Nome Usuário:
        <input
          type="text"
          value={name}
          onChange={({ target }) => setName(target.value)}
        />
      </label>
      <label>
        Email Usuário:
        <input
          type="email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
      </label>
      <button type="submit">Login</button>
    </form>
  );
}

export default Form;
