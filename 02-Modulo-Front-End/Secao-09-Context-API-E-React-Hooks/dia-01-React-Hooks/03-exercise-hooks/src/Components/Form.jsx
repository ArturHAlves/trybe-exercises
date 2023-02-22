import { useState } from 'react';

function Form() {
  const [form, setForm] = useState({
    fullName: '',
    age: 0,
    city: '',
    module: '',
  });

  const handleChange = ({ target }) => {
    const { value, name } = target;
    setForm({ ...form, [name]: value });
  };

  return (
    <form>
      <h1>Formulário</h1>

      <fieldset>
        <legend>Dados pessoais</legend>

        <label htmlFor="fullName">
          Nome completo:
          <input
            type="text"
            name="fullName"
            placeholder="Digite o seu nome completo"
            value={form.fullName}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="age">
          Idade:
          <input
            type="text"
            name="age"
            placeholder="Digite sua idade"
            value={form.age}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="city">
          Cidade:
          <input
            type="text"
            name="city"
            placeholder="Digite a sua cidade"
            value={form.city}
            onChange={handleChange}
          />
        </label>

        <fieldset>
          <legend>Modulo</legend>

          <label htmlFor="fundamentos">
            <input
              id="fundamentos"
              type="radio"
              name="module"
              value="Fundamentos"
              checked={form.module === 'Fundamentos'}
              onChange={handleChange}
            />{' '}
            Fundamentos
          </label>

          <label htmlFor="frontend">
            <input
              id="frontend"
              type="radio"
              name="module"
              value="Front-End"
              checked={form.module === 'Front-End'}
              onChange={handleChange}
            />{' '}
            Front-End
          </label>

          <label htmlFor="backend">
            <input
              id="backend"
              type="radio"
              name="module"
              value="Back-End"
              checked={form.module === 'Back-End'}
              onChange={handleChange}
            />{' '}
            Back-End
          </label>

          <label htmlFor="sciencieComputer">
            <input
              id="sciencieComputer"
              type="radio"
              name="module"
              value="Sciencie-Computer"
              checked={form.module === 'Sciencie-Computer'}
              onChange={handleChange}
            />{' '}
            Ciência da Computação
          </label>
        </fieldset>

        <button type='submit' onClick={ (e) => e.preventDefault() }>
          Enviar
        </button>

      </fieldset>
    </form>
  );
}

export default Form;
