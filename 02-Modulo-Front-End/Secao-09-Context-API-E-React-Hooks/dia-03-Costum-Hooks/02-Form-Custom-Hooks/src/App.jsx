import React from 'react';
import Swal from 'sweetalert2';
import { useState } from 'react';
import './style.css';
import useForm from './Hook/useForm';

function App() {
  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
  // const [email, setEmail] = useState('');
  const firstName = useForm('');
  const lastName = useForm('');
  const email = useForm('');

  function handleSubmit(e) {
    e.preventDefault();

    Swal.fire(
      'Formulário enviado',
      JSON.stringify({
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
      }),
      'success'
    );
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label onSubmit={handleSubmit}>
          First name:
          <input value={firstName.value} onChange={firstName.onChange} />
        </label>
        <label>
          Last name:
          <input value={lastName.value} onChange={lastName.onChange} />
        </label>
        <label>
          E-mail:
          <input value={email.value} onChange={email.onChange} />
        </label>
        <button type="submit">Submeter formulário</button>
      </form>
    </div>
  );
}

export default App;
