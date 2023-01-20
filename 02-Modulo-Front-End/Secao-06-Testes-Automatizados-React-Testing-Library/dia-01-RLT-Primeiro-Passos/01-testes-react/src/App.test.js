import { render, screen } from '@testing-library/react';
import App from './App';

test('Verificar se existe o campo Email', () => {
  render(<App />);
  const inputEmail = screen.getByLabelText(/Email/i)
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail).toHaveProperty('type', 'email')
});

// test('Verifica se existe um botão', () => {
//   // RENDERIZAR 
//   render(<App/>);

//   // Pegar o elemento
//   const btn = screen.getByRole('button');

//   // Testes
//   expect(btn).toBeInTheDocument();

// })

test('Verifica se existem dois botões', () => {
  //renderizar
  render( <App/>)

  //Pegar o elemento
  const btn = screen.getAllByRole('button');

  //Testes
  expect(btn).toHaveLength(2)
})

test('Verificar se existe um botão enviar', () => {
  //renderizar 
  render(<App/>)

  //Pegar o elemento
  const btnSend = screen.getByTestId('id-send')

  //test 
  expect(btnSend).toHaveValue('Enviar')
  expect(btnSend).toBeInTheDocument();
  expect(btnSend).toHaveProperty('type', 'button')

})