import ValidEmail from "./ValidEmail";
import { screen, render } from "@testing-library/react";

describe( 'Validar o componente ValidEmail', () => {

  it('Testando um componente, caso o email seja válido', () => {
    const email_user = 'test@gmail.com'
    // Renderizar
    render(<ValidEmail email={ email_user }/>);

    //Buscar elementos
    const isValid = screen.getByText('Email Válido')

    //test

    expect(isValid).toBeInTheDocument();
  });

  it('Testando um componente, caso o email seja invalido', () => {
    const email_user = 'test.gmail.com'

    render(<ValidEmail email={ email_user } />)

    //Buscar elementos
    const isValid = screen.getByText(/Email inválido/i);

    expect(isValid).toBeInTheDocument();
  });

  it('Testando se o componente não aparece caso o e-mail esteja vázio', () => {
    render( <ValidEmail email="" /> );

    //element
    //queryByTestId Retorna o nó correspondente para uma consulta e retorna nullse nenhum elemento corresponder. Isso é útil para afirmar um elemento que não está presente. 
    const isValidText = screen.queryByTestId('id-is-email-valid');

    expect(isValidText).not.toBeInTheDocument();

  })

    it('Testando se email for inválido fica com a cor vermelha', () => {
      const emailInvalid = 'emailInvalido';

      render( <ValidEmail email={ emailInvalid } />)

      const isValidEmail = screen.getByTestId('id-is-email-valid');

      expect(isValidEmail).toHaveAttribute('class', 'red-text')

    });

    it('Testando se email for válido fica com a cor verde', () => {
      const emailValido = 'teste@gmail.com';

      render( <ValidEmail email={ emailValido } />)

      const isValidEmail = screen.getByTestId('id-is-email-valid');

      expect(isValidEmail).toHaveAttribute('class', 'green-text');

    })

} )