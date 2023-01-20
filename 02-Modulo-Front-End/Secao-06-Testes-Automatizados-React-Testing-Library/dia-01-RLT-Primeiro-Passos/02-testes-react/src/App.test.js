import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

describe( 'Verificar o email e o botão', () => {

  it( 'Verificar se o email e o botão estão funcionando', () => {
    //Renderizar o elemento 
    render(<App/>)

    const email = 'teste@gmail.com'

    //Pegar os elementos 
    const InputEmail = screen.getByLabelText('Email');
    const btnSend = screen.getByTestId('id-send');
    const textEmail = screen.getByTestId('id-email-user');

    // userEvent.type
    userEvent.type(InputEmail, email);
    userEvent.click(btnSend)

    // testes 
    expect(InputEmail).toHaveValue('');
    expect(textEmail).toHaveTextContent(`Valor: ${email}`)

  });


});